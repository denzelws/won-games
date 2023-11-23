import { MockedProvider } from '@apollo/client/testing'
import { WishlistProvider, useWishlist } from '.'
import { renderHook } from '@testing-library/react-hooks'
import { wishlistItems, wishlistMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } }
useSession.mockImplementation(() => [session])

describe('useWishlist', () => {
  it('should render wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    // starts loading the data
    expect(result.current.loading).toBe(true)

    // await until get data
    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1]
    ])
  }),
    it('should check if game is in wishlist', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MockedProvider mocks={[wishlistMock]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )

      const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
        wrapper
      })

      // await until get data
      await waitForNextUpdate()

      expect(result.current.isInWishlist('1')).toBe(true)
      expect(result.current.isInWishlist('2')).toBe(true)
      expect(result.current.isInWishlist('3')).toBe(false)
    })
})

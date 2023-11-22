import { MockedProvider } from '@apollo/client/testing'
import { WishlistProvider, useWishlist } from '.'
import { renderHook } from '@testing-library/react-hooks'

describe('useWishlist', () => {
  it('should render wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })
  })
})

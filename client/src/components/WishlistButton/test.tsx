import { act, fireEvent, render, screen } from 'utils/test-utils'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } }
useSession.mockImplementation(() => [session])

describe('WishlistButton', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to add with text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove with text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with small size by default', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText size="small" />, {
      wishlistProviderProps
    })

    expect(screen.getByRole('button')).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should not render if not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    act(() => {
      fireEvent.click(screen.getByText(/add to wishlist/i))
    })

    expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
  })

  it('should remove from wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    act(() => {
      fireEvent.click(screen.getByText(/remove from wishlist/i))
    })

    expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
  })
})

import { renderHook } from '@testing-library/react-hooks'
import { CartProvider, CartProviderProps, useCart } from '.'
import { setStorageItem } from 'utils/localStorage'

describe('useCart', () => {
  it('should return items and info if there are any in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    setStorageItem('cartItem', ['1', '2'])

    const { result } = renderHook(() => useCart(), { wrapper })
    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})

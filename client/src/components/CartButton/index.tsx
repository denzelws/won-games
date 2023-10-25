import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="remove from cart" />
        ) : (
          <AddShoppingCart aria-label="add to cart" />
        )
      }
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton

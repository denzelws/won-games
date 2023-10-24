import { screen } from '@testing-library/react'
import { CartContextDefaultValues } from 'hooks/use-cart'

import CartIcon from '.'
import { render } from 'utils/test-utils'

describe('<CartIcon />', () => {
  it('should render without the badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with the badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})

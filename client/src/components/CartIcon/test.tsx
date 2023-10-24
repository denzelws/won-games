import { screen } from '@testing-library/react'

import CartIcon from '.'
import { render } from 'utils/test-utils'

describe('<CartIcon />', () => {
  it('should render without the badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with the badge', () => {
    render(<CartIcon quantity={3} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })

  it('should render with badge with only positive numbers', () => {
    render(<CartIcon quantity={-3} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-3/)).not.toBeInTheDocument()
  })
})

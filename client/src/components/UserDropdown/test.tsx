import { render } from 'utils/test-utils'
import { screen, fireEvent } from '@testing-library/react'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="John" />)

    expect(screen.getByText(/john/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="John" />)

    fireEvent.click(screen.getByText(/john/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})

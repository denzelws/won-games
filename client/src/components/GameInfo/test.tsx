import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game',
  description: 'Game description',
  price: '220'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(screen.getByText(/\$220/)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
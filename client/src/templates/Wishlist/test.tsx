import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  upcomingHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/project winter/i)).toHaveLength(9)
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
  })
})

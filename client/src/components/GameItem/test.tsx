import { screen } from '@testing-library/react'

import GameItem from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'My Title',
  img: 'image.jpg',
  price: '$130.00'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('img', { name: /Image Title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(screen.getByText('$130.00')).toBeInTheDocument()
  })
})

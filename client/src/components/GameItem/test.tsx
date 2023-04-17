import { screen } from '@testing-library/react'

import GameItem from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Red Dead Redemption 2',
  img: 'image.jpg',
  price: '$130.00'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText('$130.00')).toBeInTheDocument()
  })

  it('should render the item with the download link', () => {
    const downloadLink = 'http://link'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})

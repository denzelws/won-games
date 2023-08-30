import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  slug: 'resident-evil',
  title: 'Resident Evil',
  developer: 'GearBox Software',
  img: '/img/resident-evil.png',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: /resident evil/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /gearbox software/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional ', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={15} />)
    const price = screen.getByText('$235.00')
    const promotionalPrice = screen.getByText('$15.00')

    expect(price).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked ', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should show a gamecard with ribbon ', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.6rem'
    })
  })
})

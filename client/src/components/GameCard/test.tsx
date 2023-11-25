import 'session.mock'

import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'resident-evil',
  title: 'Resident Evil',
  developer: 'GearBox Software',
  img: '/img/resident-evil.png',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)
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
    render(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional ', () => {
    render(<GameCard {...props} promotionalPrice={15} />)
    const price = screen.getByText('$235.00')
    const promotionalPrice = screen.getByText('$15.00')

    expect(price).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should show a gamecard with ribbon ', () => {
    render(
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

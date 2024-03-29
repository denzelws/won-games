import { fireEvent, screen } from '@testing-library/react'
import { CartContextDefaultValues } from 'hooks/use-cart'

import GameItem from '.'
import { render } from 'utils/test-utils'

const props = {
  id: '1',
  title: 'Red Dead Redemption 2',
  img: 'image.jpg',
  price: '$130.00'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    render(<GameItem {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText('$130.00')).toBeInTheDocument()
  })

  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    fireEvent.click(removeLink)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })

  it('should render the item with the download link', () => {
    const downloadLink = 'http://link'

    render(<GameItem {...props} downloadLink={downloadLink} />)
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the paymentInfo ', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render free games when theres no paymentInfo', () => {
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Games',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/free games/i)).toBeInTheDocument()
  })
})

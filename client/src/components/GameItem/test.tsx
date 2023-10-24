import { screen } from '@testing-library/react'

import GameItem from '.'
import { render } from 'utils/test-utils'

const props = {
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
})

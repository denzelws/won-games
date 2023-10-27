import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'

import items from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00'
    }

    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      loading: true
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', async () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})

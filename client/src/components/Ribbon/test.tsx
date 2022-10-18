import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color by default', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})

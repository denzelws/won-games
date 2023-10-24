import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'Simple Title',
  description: 'Simple Description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', { name: /a gamer playing in a couch/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render the link', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})

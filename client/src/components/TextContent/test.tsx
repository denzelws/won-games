import { screen } from '@testing-library/react'

import TextContent from '.'
import { render } from 'utils/test-utils'

const props = {
  title: 'My Title',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    render(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).not.toBeInTheDocument()
  })

  it('should render the title and content with respective colors', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /my title/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})

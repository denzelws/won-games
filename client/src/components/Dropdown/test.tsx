import { fireEvent, render, screen } from 'utils/test-utils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    fireEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/).parentElement!
    const overlay = content.nextElementSibling

    fireEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('false')

    fireEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  })
})

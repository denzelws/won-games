import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import { Email } from '@styled-icons/material-outlined/Email'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="textfield" name="Label" />)

    expect(screen.getByLabelText(/textfield/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/textfield/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="field check" />)

    expect(screen.getByPlaceholderText(/field check/i)).toBeInTheDocument()
  })

  it('changes its value when typing ', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="textfield"
        name="Textfield"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'text example'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('should be accessible with tab', async () => {
    render(<TextField label="textfield" name="Textfield" />)

    const input = screen.getByLabelText(/textfield/i)
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })

  it('should render a disabled input', () => {
    render(<TextField disabled placeholder="field check" />)

    expect(screen.getByPlaceholderText(/field check/i)).toBeDisabled()
  })

  it('does not change its value when disabled', async () => {
    const onInputChange = jest.fn()

    render(<TextField label="textfield" name="Textfield" disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'this is a text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should not be accessible with tab', async () => {
    render(<TextField label="textfield" name="Textfield" disabled />)

    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should show an error message', () => {
    const { container } = render(
      <TextField label="textfield" error="Error message" />
    )

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

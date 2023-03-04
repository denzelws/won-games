import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { Email } from '@styled-icons/material-outlined/Email'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="textfield" labelFor="field" />)

    expect(screen.getByLabelText(/textfield/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText(/textfield/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="field check" />)

    expect(screen.getByPlaceholderText(/field check/i)).toBeInTheDocument()
  })

  it('changes its value when typing ', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="textfield"
        labelFor="textfield"
        id="textfield"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'text example'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(
      <TextField label="textfield" labelFor="textfield" id="textfield" />
    )

    const input = screen.getByLabelText(/textfield/i)
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })

  it('should render a disabled input', () => {
    renderWithTheme(<TextField disabled placeholder="field check" />)

    expect(screen.getByPlaceholderText(/field check/i)).toBeDisabled()
  })

  it('does not change its value when disabled', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        label="textfield"
        labelFor="textfield"
        id="textfield"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'this is a text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should not be accessible with tab', async () => {
    renderWithTheme(
      <TextField
        label="textfield"
        labelFor="textfield"
        id="textfield"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should show an error message', () => {
    const { container } = renderWithTheme(
      <TextField
        label="textfield"
        labelFor="textfield"
        id="textfield"
        error="Error message"
      />
    )

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

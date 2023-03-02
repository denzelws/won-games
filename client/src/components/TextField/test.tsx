import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

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
})

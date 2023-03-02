import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with the label(white)', () => {
    const { container } = renderWithTheme(
      <Radio label="radio" labelFor="radio" />
    )

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/radio/i)).toBeInTheDocument()

    expect(screen.getByText(/radio/i)).toHaveAttribute('for', 'radio')
    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the label(black)', () => {
    renderWithTheme(<Radio labelColor="black" label="radio" labelFor="radio" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/radio/i)).toBeInTheDocument()

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText(/radio/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio
        label="radio"
        labelFor="radio"
        value="anyValue"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText(/radio/i))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Radio label="radio" labelFor="radio" />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText(/radio/i)).toHaveFocus()
  })
})

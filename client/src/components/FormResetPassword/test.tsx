import 'server.mock'
import { signIn } from 'next-auth/client'

import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword', () => {
  it('should render form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText('Confirm password'), '321')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/confirm password does not match/i)
    ).toBeInTheDocument()
  })

  it('should show error when wrong code provided', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText('Confirm password'), '123')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/incorrect code provided/i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'valid_code' }

    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText('Confirm password'), '123')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})

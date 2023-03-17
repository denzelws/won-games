import * as S from './styles'

import Link from 'next/link'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink } from 'components/FormSignIn/styles'

import { AccountCircle, Mail, Lock } from '@styled-icons/material-outlined'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Mail />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp

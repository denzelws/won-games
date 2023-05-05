import Heading from 'components/Heading'
import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        label="Name"
        placeholder="Name"
        initialValue="John Cage"
      />

      <TextField
        name="email"
        type="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="john.cage@gmail.com"
        disabled
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        placeholder="Type your password"
      />

      <TextField
        name="new_password"
        type="password"
        label="New password"
        placeholder="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile

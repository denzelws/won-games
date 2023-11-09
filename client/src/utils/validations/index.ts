import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string().valid(Joi.ref('password')).required()
}

export type FieldErrors = {
  [key: string]: string
}
export function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      const errorMessage = err.message.replace(
        '"confirm_password" must be [ref:password]',
        'confirm password does not match with password'
      )
      errors[err.path.join('.')] = errorMessage
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(
    schema.validate(values, {
      abortEarly: false
    })
  )
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

import { Story, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from '.'

import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    icon: <Email />,
    name: 'email',
    initialValue: '',
    placeholder: 'teste@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

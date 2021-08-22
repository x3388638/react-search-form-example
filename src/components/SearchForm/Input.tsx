import { ComponentProps, FC } from 'react'
import { Form } from 'react-bootstrap'

import Field from './Field'

interface InputProps extends ComponentProps<typeof Form.Control> {
  fieldLabel: string
  fieldKey: string
}

const Input: FC<InputProps> = ({ fieldLabel, fieldKey, ...restProps }) => {
  return (
    <Field>
      <Form.Label>{fieldLabel}</Form.Label>
      <Form.Control type="text" {...restProps} />
    </Field>
  )
}

export default Input

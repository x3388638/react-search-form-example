import { ChangeEvent, ComponentProps, FC, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Field from './Field'
import { useSearchFormField } from './searchFormContext'

interface InputProps extends ComponentProps<typeof Form.Control> {
  fieldLabel: string
  fieldKey: string
}

const Input: FC<InputProps> = ({
  fieldLabel,
  fieldKey,
  defaultValue,
  ...restProps
}) => {
  const { fieldValue, setFieldValue } = useSearchFormField<string>(fieldKey)

  useEffect(() => {
    setFieldValue(defaultValue as string)
  }, [defaultValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value)
  }

  return (
    <Field>
      <Form.Label>{fieldLabel}</Form.Label>
      <Form.Control
        type="text"
        value={fieldValue || ''}
        onChange={handleChange}
        {...restProps}
      />
    </Field>
  )
}

export default Input

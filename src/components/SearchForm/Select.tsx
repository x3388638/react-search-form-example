import { ComponentProps, FC } from 'react'
import { Form } from 'react-bootstrap'
import Field from './Field'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends ComponentProps<typeof Form.Select> {
  fieldLabel: string
  fieldKey: string
  options: SelectOption[]
}

const Select: FC<SelectProps> = ({
  fieldLabel,
  fieldKey,
  options,
  ...restProps
}) => {
  return (
    <Field>
      <Form.Label>{fieldLabel}</Form.Label>
      <Form.Select {...restProps}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Form.Select>
    </Field>
  )
}

export default Select

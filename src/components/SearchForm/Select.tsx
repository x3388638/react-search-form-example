import { ChangeEvent, ComponentProps, FC, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Field from './Field'
import { useSearchFormField } from './searchFormContext'

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
  defaultValue,
  ...restProps
}) => {
  const { fieldValue, setFieldValue } = useSearchFormField<string>(fieldKey)

  useEffect(() => {
    setFieldValue(defaultValue as string)
  }, [defaultValue])

  useEffect(() => {
    if (!fieldValue) {
      setFieldValue(options[0].value)
    }
  }, [fieldValue, options])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFieldValue(e.target.value)
  }

  return (
    <Field>
      <Form.Label>{fieldLabel}</Form.Label>
      <Form.Select
        value={fieldValue || options[0].value}
        onChange={handleChange}
        {...restProps}
      >
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

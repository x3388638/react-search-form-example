import { ComponentProps, FC, FormEvent, useReducer } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

import { SearchFormProvider } from './searchFormContext'
import reducer, { CLEAR_FIELD, RESET, SET_FIELD } from './reducer'

const Container = styled(Form)`
  margin: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px #0000000f;
`

const Fields = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`

interface SearchFormProps extends ComponentProps<typeof Form> {
  onSearch: (fields: Record<string, any>) => void
  onClear?: () => void
}

const SearchForm: FC<SearchFormProps> = ({
  onSearch,
  onClear,
  children,
  ...restProps
}) => {
  const [fields, dispatch] = useReducer(reducer, {})

  const setFieldValue = ({
    fieldKey,
    value
  }: {
    fieldKey: string
    value: any
  }) => {
    dispatch({
      type: SET_FIELD,
      payload: {
        fieldKey,
        value
      }
    })
  }

  const clearField = (fieldKey: string) => {
    dispatch({
      type: CLEAR_FIELD,
      payload: {
        fieldKey
      }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(fields)
  }

  const handleClear = () => {
    dispatch({
      type: RESET
    })

    onClear && onClear()
  }

  return (
    <SearchFormProvider
      value={{
        fields,
        setFieldValue,
        clearField
      }}
    >
      <Container onSubmit={handleSubmit} {...restProps}>
        <Fields>{children}</Fields>
        <Buttons>
          <Button type="submit" size="sm">
            Search
          </Button>
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Buttons>
      </Container>
    </SearchFormProvider>
  )
}

export default SearchForm

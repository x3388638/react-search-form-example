import { ComponentProps, FC } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

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
  onSearch: () => any
}

const SearchForm: FC<SearchFormProps> = ({
  onSearch,
  children,
  ...restProps
}) => {
  return (
    <Container className="searchForm" {...restProps}>
      <Fields>{children}</Fields>
      <Buttons>
        <Button type="submit" size="sm">
          Search
        </Button>
        <Button type="button" size="sm" variant="secondary">
          Clear
        </Button>
      </Buttons>
    </Container>
  )
}

export default SearchForm

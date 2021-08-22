import { useContext, createContext } from 'react'

interface SearchFormContext {
  fields: { [fieldKey: string]: any }
  setFieldValue: ({ fieldKey, value }: { fieldKey: string; value: any }) => void
  clearField: (fieldKey: string) => void
}

const context = createContext<SearchFormContext>({} as SearchFormContext)
export const SearchFormProvider = context.Provider

export const useSearchFormContext = (): SearchFormContext => {
  return useContext(context)
}

export const useSearchFormField = <T>(
  fieldKey: string
): {
  fieldValue: T
  setFieldValue: (value: T) => void
  clearField: () => void
} => {
  const { fields, setFieldValue, clearField } = useSearchFormContext()

  return {
    fieldValue: fields[fieldKey],
    setFieldValue: (value: T) => {
      setFieldValue({
        fieldKey,
        value
      })
    },
    clearField: () => {
      clearField(fieldKey)
    }
  }
}

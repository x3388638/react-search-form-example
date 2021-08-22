import { FC } from 'react'

import SearchForm, { Input, Select } from '../../components/SearchForm'

const Home: FC = () => {
  const handleSearch = () => {
    console.log('handle search')
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch}>
        <Input fieldKey="name" fieldLabel="User Name" />
        <Input fieldKey="email" fieldLabel="User Email" type="email" />
        <Select
          fieldKey="gender"
          fieldLabel="Gender"
          options={[
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f' }
          ]}
        />
      </SearchForm>
    </div>
  )
}

export default Home

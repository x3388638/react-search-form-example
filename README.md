# react-search-form-example

Use React useContext & useReducer hooks to build a reusable search form which is easy to support different types of field

## Demo

```
$ yarn
$ yarn start
```

open browser and go to http://localhost:3000/

![](https://i.imgur.com/V2Sp9Nk.png)

Source

```
<SearchForm onSearch={handleSearch}>
  <Input
    fieldKey="name"
    fieldLabel="User Name"
    defaultValue="default name"
  />
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
```

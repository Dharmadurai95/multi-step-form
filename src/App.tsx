import { FormEvent, useState } from 'react';
import './app.css'
import AccountDetails from './forms/AccountDetails';
import AddressDetails from './forms/addressDetails';
import UserForm from './forms/userForm';
import useMultiForm from './useMultiForm';
export type formData = {
  fName: string,
  lName: string,
  age: string,
  email: string,
  password: string,
  street: string,
  city: string,
  state: string,
  pincode: string,
}
const INITIAL_DATA: formData = {
  fName: '',
  lName: '',
  age: '',
  email: '',
  password: '',
  street: '',
  city: '',
  state: '',
  pincode: '',
}
function App() {
  const [formData, setFormData] = useState(INITIAL_DATA)
  function updateField(value: Partial<formData>) {
    setFormData(val => {
      return {
        ...val,
        ...value,
      }
    })
  }
  const { next, back, go, currentIndex, step, steps, isFirstPage, isLastPage } = useMultiForm([
    <UserForm {...formData} updateFields={updateField} />,
    <AddressDetails {...formData} updateFields={updateField} />,
    <AccountDetails {...formData} updateFields={updateField} />
  ])
  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    if(isLastPage) return alert('Form Submitted Successfully')
    next()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={'container'}>
        <div className='stepCount'>
          {currentIndex + 1}/{steps.length}
        </div>
        <div>
          {step}
        </div>
        <div className='buttonContainer'>
          {!isFirstPage && <button type='button' onClick={back}>
            Back
          </button>}
          <button type='submit'>
            {isLastPage ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default App

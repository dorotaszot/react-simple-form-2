import './App.css';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState(
    {
      firstName: '',
      lastName: '',
      email: ''
    }
  );

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputOnchange = (e) => {
    setValues({...values, firstName: e.target.value});
  };
  const handleLastNameInputOnchange = (e) => {
    setValues({...values, lastName: e.target.value});
  };
  const handleEmailInputOnchange = (e) => {
    setValues({...values, email: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true)
    };
    setSubmitted(true)
  }

  return (
    <div className="App">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2>Subscribe with us!</h2>
        {submitted && valid ? <div className='success-message'>Thank you for registering!</div> : null}
       
        <input onChange={handleFirstNameInputOnchange} value={values.firstName} type="text" placeholder='Enter First Name'></input>
        {submitted && !values.firstName ? <span>Please enter your first name</span> : null}
        <input onChange={handleLastNameInputOnchange} value={values.lastName} type="text" placeholder='Enter Last Name'></input>
        {submitted && !values.lastName ? <span>Please enter your last name</span> : null}
        <input onChange={handleEmailInputOnchange} value={values.email} type="text" placeholder='Enter Email'></input>
        {submitted && !values.email ? <span>Please enter your email</span> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

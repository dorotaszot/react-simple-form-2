import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form-wrapper">
        <div>Thank you for registering!</div>
        <input type="text" placeholder='Enter First Name'></input>
        <span>Please enter your first name</span>
        <input type="text" placeholder='Enter Last Name'></input>
        <span>Please enter your last name</span>
        <input type="text" placeholder='Enter Email'></input>
        <span>Please enter your email</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

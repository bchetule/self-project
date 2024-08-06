import React, {useState} from 'react';
import "./styles.css";


function SignUP() {
    // const [enteredUName, setEnteredUName] = useState("user");
    // const[enteredpass, setEnteredPass] = useState("pass");

    // const unameHandler = (event) => {
    //     setEnteredUName(event.target.value);
    // }

    // const passHandler = (event) => {
    //     setEnteredPass(event.target.value);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text"  required/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" required/>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        
      </form>
    </div>
      </div>
    </div>
  );
}

// export default SignUP;

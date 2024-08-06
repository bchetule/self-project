import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import LandingPage from "./LandingPage";

function Login({ onLogin }) {
  const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
  const [enteredUName, setEnteredUName] = useState({ name: String });
  const [enteredpass, setEnteredPass] = useState({ key: String });
  const [data, setData] = useState({ data: String });
  // const [press, setPressed] = useState(false);
  // const [password, setPassword] = useState('');
  const unameHandler = (event) => {
    setEnteredUName(event.target.value);
  };

  const passHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const errors = {
    uname: "invalid credentials",
    pass: "invalid credentials",
  };

  const handleSubmit = async(event) => {
    
    event.preventDefault();
    
    try {
      const response = await axios.get("http://localhost:8081/login/" + enteredUName, {});
      const str = response.data;

      // Assuming user object contains a 'password' property
      if (str) {
        setData(str);
        // Now you can use the 'password' for authentication or any other purpose
        console.log()
        if(data === enteredpass){
          onLogin();
          return <LandingPage />;
        }
        else{
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    } catch (error) {
      console.error(error);
    }
    
  };
// console.log("Outside handle Submit");
  // useEffect(() => {
  //   if (press === true) {
  //     axios
  //       .get("http://localhost:8081/login/" + enteredUName, {})
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // }, [enteredUName, press]);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
  return (
    <div>
    <div className="app">
      <div className="login-form">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" onChange={unameHandler} />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" onChange={passHandler} />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
              <button type="button" value="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* {isSubmitted && <LandingPage />} */}
    </div>
  );
}

export default Login;

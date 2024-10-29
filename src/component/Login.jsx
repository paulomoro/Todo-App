import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    signInWithEmailAndPassword,
    auth
  } from "../firebase";

export default function Login(){

    const [loginData, setLoginData]  = useState({
        email: "",
        password : ""
      })
   
        function handleChange (event) {
            const {name,value} = event.target

            setLoginData(prevInput => ({
                ...prevInput,
                [name]:value
            }))
        }
            
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    // const [authentication, setAuthentication] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // create a new user with email and password
          const userCredential = await signInWithEmailAndPassword(
            auth,
            loginData.email,
            loginData.password
          );
          navigate("/todoMain")
          // Pull out user's data from the userCredential property
          const user = userCredential.user;
        } catch (err) {
          // Handle errors here
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);
      console.log(errorCode)

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered. sign up");
          break;
        case "auth/wrong-password":
          setErrorMessage("The password is invalid or the user does not have a password.")
          break;
        default:
          setErrorMessage(errorMessage);
          break;
          }
        }
       
      };

        return (
            <div className="loginPage">
                <h1>Login</h1>
                <form action="" className="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        E-mail <br />
                        <input type="email" 
                        name="email" 
                        id="email"
                        value={loginData.email}
                        placeholder="Enter your Email....."
                        onChange={handleChange} />
                    </label>

                    <label htmlFor="password">
                        Password <br />
                        <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter your password......"
                        value={loginData.password}
                        onChange={handleChange}/>
                    </label>

                    
                    <button >Login</button>

                    {error&& <p className='error'>{errorMessage}</p>}
                </form>

                <p>Do not have an account yet? <Link to="/">Sign Up</Link> </p>

            </div>
        );
}


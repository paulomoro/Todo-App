import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    auth
  } from "../firebase";



export default function SignUp(){

    const [signUpData, setsignUpData]  = useState({
        email: "",
        password : ""
      })

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    // const [authentication, setAuthentication] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // create a new user with email and password
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            signUpData.email,
            signUpData.password
          );
          navigate("/todoMain")
          // Pull out user's data from the userCredential property
          const user = userCredential.user;
        } catch (err) {
          // Handle errors here
          const errorMessage = err.message;
          const errorCode = err.code;
    
          setError(true);
    
          switch (errorCode) {
            case "auth/weak-password":
              setErrorMessage("The password is too weak.");
              break;
            case "auth/email-already-in-use":
              setErrorMessage(
                "This email address is already in use by another account."
              );
              break
            case "auth/invalid-email":
              setErrorMessage("This email address is invalid.");
              break;
            case "auth/operation-not-allowed":
              setErrorMessage("Email/password accounts are not enabled.");
              break;
            default:
              setErrorMessage(errorMessage);
              break;
          }
        }
       
      };
   
    function handleChange (event) {
        const {name,value} = event.target

        setsignUpData(prevInput => ({
            ...prevInput,
            [name]:value
        }))
        
        console.log(signUpData)
    }



    return (
        <div className="signUpPage">
            <h1>Sign Up to Create Todo</h1>
            <form action="" className="signUpForm" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    E-mail <br />
                    <input type="email" 
                    name="email" 
                    id="email"
                    value={signUpData.email}
                    placeholder="Enter your Email....."
                    onChange={handleChange} />
                </label>

                <label htmlFor="password">
                    Password <br />
                    <input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password......"
                    value={signUpData.password}
                    onChange={handleChange}/>
                </label>

                <button>Sign up</button>
                {error && <p className='error'>{errorMessage}</p>}
            </form>

            <p>Already have an account?  <Link to="/login">Login</Link> </p>

        </div>
    );
}


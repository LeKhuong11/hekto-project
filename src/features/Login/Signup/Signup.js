import { useUserAuth } from 'context/UserAuthContext';
import { useState } from 'react';
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import '../login.scss'

function Signup() {
  const { signUp } = useUserAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const handleSubmitSignup = async (e) => {
      e.preventDefault()
      setError("")
      try{
        await signUp(email, password) 
        alert("Signup susscessfully!")
        navigate("../login")
      } catch(err){
        setError(err.message)
      }
    }
  return (
    <div className='signup'>
        <div className='signup-form'>
          <h2>Sign-up</h2>
          <p>Please input yourt info.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <form className='' onSubmit={handleSubmitSignup}>
              <div>
                <label>Input Your Name: </label> <br />
                <input type='text' required placeholder='User Name...'/> <br/>
              </div>
              <div>
                <label>Input Your Email: </label> <br />
                <input type='email'  onChange={(e) => setEmail(e.target.value)} required placeholder='User Email...'/> <br/>
              </div>
              <div>
                <label>Input Your Password: </label> <br />
                <input type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/> <br/>
              </div>
              <div>
                <input type="submit" value="Sign in"/> <br />
              </div>
              <Link to='../login'>Do you have an Account? Sign In?</Link>
          </form>
        </div>
    </div>
  )
}

export default Signup
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useUserAuth } from 'context/UserAuthContext';
import { Alert } from 'react-bootstrap';
import GoogleButton from "react-google-button";
import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import DashBoard from '../Dashboard/DashBoard'
import '../login.scss'

function Signin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const userCheck = useSelector(state => state.user)

  const handleSubmitLogin = async (e) => {
     e.preventDefault();

     setError("")
      try{
        await logIn(email, password)
        navigate("../dashboard")
      } catch(err){
        setError(err.message)
      }
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      navigate("../dashboard")
    }
    catch(err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
    {userCheck.user ?  <DashBoard /> :
        <div className='signin'>
          <HeaderPage namePage="My Account" />
          <div className='signin-login'>
            <div className='signin-login-form'>
              <h2>Login</h2>
              <p>Please login using account bellow.</p>
              {error && <Alert variant="danger">{error}</Alert>}
              <form onSubmit={handleSubmitLogin}>
                <div>
                  <label>Your Email: </label> <br />
                  <input type='email' onChange={(e) => setEmail(e.target.value)} required placeholder='User Email...'/> <br/>
                </div>
                <div>
                  <label>Your Password: </label> <br />
                  <input type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/> <br/>
                </div>
                  <Link to='forgot-password'>Forgot your password?</Link>
                <div>
                  <input type="submit" value="Sign in"/> <br />
                </div>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
                <Link to='../signup'>Don't have an Account?Create Account?</Link>
              </form>
            </div>
          </div>
          <div>
            <Introduce />
          </div>
        </div>}
  </>
}

export default Signin
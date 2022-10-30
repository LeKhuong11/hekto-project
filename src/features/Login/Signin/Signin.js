import React from 'react'
import '../login.scss'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='signin'>
      <div className='signin-title'>
       <div>
          <h1>My Account</h1>
          <div className='signin-link'>
            <Link to="/">Home . </Link>
            <Link to="../pages">Pages . </Link>
            <p style={{color: "#FB2E86", margin: 0}}>My Account</p>
          </div>
       </div>
      </div>
      <div className='signin-login'>
        <div className='signin-login-form'>
          <h2>Login</h2>
          <p>Please login using account bellow.</p>
          <form className=''>
            <input type='text' placeholder='Email address'/> <br/>
            <input type='password' placeholder='Password'/> <br/>
            <Link to='forgot-password'>Forgot your password?</Link>
            <input type="submit" value="Sign in"/> <br />
            <Link to='create-account'>Don't have an Account?Create Account?</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
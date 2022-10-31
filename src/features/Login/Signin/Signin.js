import React from 'react'
import '../login.scss'
import { Link } from 'react-router-dom'
import HeaderPage from 'components/Header-page/HeaderPage'

function Signin() {
  return (
      <div className='signin'>
          <HeaderPage namePage="My Account" />
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
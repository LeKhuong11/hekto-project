import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import '../login.scss'
import { user } from 'redux/userSlice'
import DashBoard from '../DashBoard'
import { useEffect } from 'react'

function Signin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userCheck = useSelector(state => state.user)

  const handleSubmitLogin = (e) => {
    const account = {
      user: 'admin',
      password: '123456'
    }
    dispatch(user(account))
    navigate("../products")  
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <>
    {userCheck.user ?  <DashBoard /> :
        <div className='signin'>
          <HeaderPage namePage="My Account" />
          <div className='signin-login'>
            <div className='signin-login-form'>
              <h2>Login</h2>
              <p>Please login using account bellow.</p>
              <form className='' onSubmit={handleSubmitLogin}>
                <input type='text' defaultValue='admin' placeholder='Email address'/> <br/>
                <input type='password' defaultValue='123456' placeholder='Password'/> <br/>
                <Link to='forgot-password'>Forgot your password?</Link>
                <input type="submit" value="Sign in"/> <br />
                <Link to='create-account'>Don't have an Account?Create Account?</Link>
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
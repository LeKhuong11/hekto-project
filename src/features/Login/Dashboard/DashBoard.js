import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from 'redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from 'context/UserAuthContext'
import HeaderPage from "components/Header-page/HeaderPage"
import FormAddProduct from "../Form"
import { useEffect } from 'react'
import '../login.scss'

function DashBoard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const infoUser = useSelector(state => state.user)
  const { logOut } = useUserAuth()

  if(infoUser.email === null) {
    navigate("../login")
  }

  const handleClickLogout = async () => {
    try {
      await logOut();
      dispatch(userLogout())
      navigate("../login")
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="dashboard">
      <HeaderPage namePage="Dashboard" />
      <div className="dashboard-body">
        <div>
          <div className="dashboard-body-person">
            <div>
              <img src={infoUser.avatar} width={250} alt="" />
              <div>
                <div style={{display: 'flex', fontSize: 20}}>
                  <p style={{paddingRight: 5}}>Hello </p>
                  <h4> {infoUser.name === 'User' ? infoUser.email : infoUser.name }</h4>
                </div>
                <button onClick={handleClickLogout}>Log out</button>
              </div>
              </div>
            </div>
          <div className="dashboard-body-form">
            <h3>Add Product</h3>
            <FormAddProduct />  
          </div>
        </div>    
      </div>    
    </div>
  )
}

export default DashBoard
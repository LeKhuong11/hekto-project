import { useSelector, useDispatch } from 'react-redux'
import HeaderPage from "components/Header-page/HeaderPage"
import FormAddProduct from "./Form"
import user from 'image/user.png'
import './login.scss'
import { userLogout } from 'redux/userSlice'

function DashBoard() {
  const dispatch = useDispatch()
  const infoUser = useSelector(state => state.user)

  const handleClickLogout = () => {
    dispatch(userLogout())
  }
  
  return (
    <div className="dashboard">
      <HeaderPage namePage="Dashboard" />
      <div className="dashboard-body">
        <div>
          <div className="dashboard-body-person">
            <img src={user} width={250} alt="" />
            <div>
              <h4>{infoUser.name}</h4>
              <button onClick={handleClickLogout}>Log out</button>
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
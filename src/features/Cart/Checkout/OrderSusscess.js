import React from 'react'
import orderSusscess from 'image/orderSusscess.svg'
import 'components/Button/button.scss'
import Introduce from 'components/introduce/Introduce'
import HeaderPage from 'components/Header-page/HeaderPage'
import { useNavigate } from 'react-router-dom'


function OrderSusscess() {
    const navigate = useNavigate();

    const handleClickOderSusscess = () => {
        navigate('../products')
    }
  return (
    <div className='order-susscess'>
        <HeaderPage namePage="Order-Completed" />
        <div>
            <img src={orderSusscess} alt="ordersusscess" />
            <h2>Your Order is Completed!</h2>
            <p>Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
            </p>
            <button onClick={handleClickOderSusscess} className='button'>Continue Shopping</button>
        </div>
        <Introduce />
    </div>
  )
}

export default OrderSusscess
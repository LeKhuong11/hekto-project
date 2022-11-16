import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Color from 'image/color.svg'
import HeaderPage from 'components/Header-page/HeaderPage'
import Product from './Product'
import Introduce from 'components/introduce/Introduce'
import { getItems } from 'redux/dataSlice';
import { toast } from 'react-toastify'
import Toast from 'components/ToastMessage/Toast'
import './product.scss'


 function Products() {
  document.title = "Products"
  const dispatch = useDispatch()
  
  const data = useSelector(state => state.data)
  const [product, setProduct] = useState(data.data);


  useEffect(() => {
    setProduct(data.data)
  }, [data])

  useEffect(() => {
    dispatch(getItems());
  }, [])

  const handleClickShowToastMessage = () => {
    //Show toast message
    toast.success('Wow added so easy!', {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='products'>
      <HeaderPage namePage="Shop Grid Default" />
      {data.isLoading ? <h1>Loading....</h1> : 
        <div className='products-body'>
        <div className='products-body-list'>
          <h3>Ecommerce Acceories & Fashon item</h3>
          <p>About {product.length} result (0.62 seconds)</p>
          <div>
            {product && product.map((item, index) => (
              <Product onClicked={handleClickShowToastMessage} key={index} product={item} color={Color} />
            ))}
          </div>
        </div>
        <div>
          <Introduce />
        </div>
          <Toast />
        </div>
      }
    </div>
  )
}

export default Products
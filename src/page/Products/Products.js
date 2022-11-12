import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Color from 'image/color.svg'
import HeaderPage from 'components/Header-page/HeaderPage'
import Product from './Product'
import Introduce from 'components/introduce/Introduce'
import { Action } from 'components/OrderSusscess/OrderSusscess'
import './product.scss'


 function Products() {
  document.title = "Products"
  
  const data = useSelector(state => state.data)
  const [product, setProduct] = useState(data.data);
  const [ orderSusscess, setOrderSusscess ] = useState(false)

  useEffect(() => {
    setProduct(data.data)
  }, [data])

  return (
    <div className='products'>
      <HeaderPage namePage="Shop Grid Default" />
      <div className='products-body'>
          <div className='products-body-list'>
            <h3>Ecommerce Acceories & Fashon item</h3>
            <p>About 9.620 result (0.62 seconds)</p>
            <div>
              {product && product.map((item, index) => (
                <Product onClicked={setOrderSusscess} key={index} product={item} color={Color} />
              ))}
            </div>
          </div>
          <div>
            <Introduce />
          </div>
          {orderSusscess === 'render' && <Action />}
          
      </div>
    </div>
  )
}

export default Products
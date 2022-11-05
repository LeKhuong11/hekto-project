import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Color from 'image/color.svg'
import HeaderPage from 'components/Header-page/HeaderPage'
import Product from './Product'
import Introduce from 'components/introduce/Introduce'
import './product.scss'


 function Products() {
  document.title = "Products"
  
  const data = useSelector(state => state.fetchApi)
  const [product, setProduct] = useState(data.list);

  useEffect(() => {
    setProduct(data.list)
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
                <Link key={index} to={`detail/${item._id}`}>
                  <Product product={item} color={Color} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Introduce />
          </div>
      </div>
    </div>
  )
}

export default Products
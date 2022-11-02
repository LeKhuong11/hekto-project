import React from 'react'
import HeaderPage from 'components/Header-page/HeaderPage'
import Char1 from 'image/product/image9.svg'
import Char2 from 'image/product/image10.svg'
import Char3 from 'image/product/image11.svg'
import Char4 from 'image/product/image12.svg'
import Product from './Product'
import './product.scss'

const productList = [
  {
    name: 'Vel elit euismod',
    img: Char1,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Ultricies condimentum imperdiet',
    img: Char2,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Vitae suspendisse sed',
    img: Char3,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Sed at fermentum',
    img: Char4,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Vel elit euismod',
    img: Char1,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Ultricies condimentum imperdiet',
    img: Char2,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Vitae suspendisse sed',
    img: Char3,
    price: 26.000,
    priceOld: 42.000
  },
  {
    name: 'Sed at fermentum',
    img: Char4,
    price: 26.000,
    priceOld: 42.000
  },
]


function Products() {
  return (
    <div className='products'>
      <HeaderPage namePage="Shop Grid Default" />
      <div className='products-body'>
          <div className='products-body-list'>
            <h3>Ecommerce Acceories & Fashon item</h3>
            <p>About 9.620 result (0.62 seconds)</p>
            <div>
              {productList.map(item => (
                <Product product={item} />
              ))}
            </div>
          </div>
          <div></div>
      </div>
    </div>
  )
}

export default Products
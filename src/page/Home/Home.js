import React from 'react'
import './home.scss'
import 'components/Button/button.scss'
import { useNavigate } from 'react-router-dom'
import light from 'image/light-header.svg'
import sofa from 'image/sofa-header.svg'
import chair1 from 'image/home/chair1.svg'
import chair2 from 'image/home/chair2.svg'
import chair3 from 'image/home/chair3.svg'
import chair4 from 'image/home/chair4.svg'
import Color from 'image/home/color2.svg';
import Product from 'page/Products/Product'


const product1 = [
  {
    name: 'Cantilever',
    img: chair1,
    price: 42.00
  },
  {
    name: 'Cantilever',
    img: chair2,
    price: 42.00
  },
  {
    name: 'Cantilever',
    img: chair3,
    price: 42.00
  },
  {
    name: 'Cantilever',
    img: chair4,
    price: 42.00
  },
]

function Home() {
  document.title = "Hekto Store"
  const navigate = useNavigate();

  //Click to shop
  const handleClickTo = () => {
    navigate("/shop")
  }

  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-left'>
          <img width={200} src={light} alt="light" />
          <div>
            <p style={{fontWeight: 550,color: '#FB2E86', margin: 0 }}>Best Furniture For Your Castle...</p>
            <h1 style={{fontSize: 40, margin: "5px 0 10px 0"}}>New Furniture Collection Trend in 2020</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
            <button className='button' onClick={handleClickTo}>
              Shop now
            </button>
          </div>
        </div>
        <div className='home-right'>
          <div>
            <img width={350} alt='sofa' src={sofa}/>
          </div>
        </div>
      </div>
      <div className='home-product'>
        <div>
          <h1>Featured Product</h1>
          <div className='home-product-list'>
             {product1.map((item, index) => {
                return <Product key={index} product={item} color={Color} changeStyle={true}/>
             })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
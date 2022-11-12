import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Color from 'image/home/color2.svg';
import Product from 'page/Products/Product'
import Slider from './Slider'
import './home.scss'
import 'components/Button/button.scss'

function Home() {
  document.title = "Hekto Store"
  const dataList = useSelector(state => state.data)
  const { data } = dataList
  
  const [ slider, setSlider ] = useState({})
  const [ count, setCount ] = useState(1)
 
  //filter products type is "chair"
  const chairProducts = data.filter(item => {
    return item.categories.includes('chair')
  })


  //handle click next 
  const handleClickNext = () => {
    setCount(count + 1)
    
    const products = document.querySelectorAll(".product")
    const productList = document.querySelector(".home-product-list")
    productList.appendChild(products[0])
    // const product = document.querySelector(".product")
    // let item = {}
    
    // if(count < (chairProducts.length - 3)) {
    //    item = {
    //     styles: {
    //       transform: `translateX(-${(product.clientWidth + 20) * count}px)`
    //     }
    //   }
    //   setSlider(item)
    // }
    // else {
    //   console.log(count);
    // }
  }

  const handleClickPrev = () => {
    const products = document.querySelectorAll(".product")
    const productList = document.querySelector(".home-product-list")
    productList.prepend(products[products.length - 1])
  }
  

  return (
    <div className='home'>
      <Slider></Slider>
      <div className='home-product'>
        <div>
          <h1>Featured Product</h1>
          <div>
              <FaChevronLeft onClick={handleClickPrev} />
            <div className='home-product-slideshow'>
              <div className='home-product-list' style={slider.styles}>
                {chairProducts.map((item, index) => {
                  return <Product key={index} product={item} color={Color} changeStyle={true}/>
                })}
              </div>
            </div>
                <FaChevronRight onClick={handleClickNext} />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Home
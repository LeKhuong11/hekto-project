import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Product from 'page/Products/Product'
import Slider from './Slider'
import Intro from 'page/About/Intro';
import Color from 'image/home/color.svg';
import trunk from 'image/about/trunk.svg'
import premium from 'image/about/premium-quality.svg'
import cashback from 'image/about/cashback.svg'
import support24h from 'image/about/24-hours-support.svg'
import productTrending from 'image/home/productTrending.svg'
import EllipseViolet from 'image/contact/Ellipse41.svg';
import EllipsePink from 'image/contact/Ellipse42.svg';
import EllipseBlue from 'image/contact/Ellipse43.svg';
import './home.scss'
import 'components/Button/button.scss'

const listImg = [
  {
    img: trunk,
    title: 'Free Delivery'
  }, 
  {
    img: cashback,
    title: "100% Cash Bash"
  },
  {
    img: premium,
    title: "24/7 Support"
  }, 
  {
    img: support24h,
    title: "24/7 Support"
  }]

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
      <Slider />
      <div className='home-product'>
        <div className='home-product-slides'>
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
        <div className='home-product-intro'>
          <h1>What Shopex Offer</h1>
          <div>
            {listImg.map((item, index) => {
              return <Intro key={index} image={item.img} title={item.title}/>
            })}
          </div>
        </div>
        <div className='home-product-product-hot'>
            <div>
              <div>
                <img width={400} src={productTrending} alt=''/>
              </div>
              <div>
                <h3>Unique Features Of leatest & Trending Poducts</h3>
                <div>
                  <div className='title'>
                    <img width={13} src={EllipseViolet} alt=""/>
                    <p>All frames constructed with hardwood solids and laminates</p>
                  </div>
                  <div className='title'>
                    <img width={13} src={EllipsePink} alt=""/>
                    <p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p> 
                  </div>
                  <div className='title'>
                    <img width={13} src={EllipseBlue} alt=""/>
                    <p>Arms, backs and seats are structurally reinforced</p>
                  </div>
                </div>
                <button className='button'>Add To Cart</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
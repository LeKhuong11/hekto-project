import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Product from 'page/Products/Product'
import Slider from './components/Slider'
import Intro from 'page/About/Intro';
import Color from 'image/home/color.svg';
import trunk from 'image/about/trunk.svg'
import premium from 'image/about/premium-quality.svg'
import cashback from 'image/about/cashback.svg'
import support24h from 'image/about/24-hours-support.svg'
import room1 from 'image/home/room1.svg';
import room2 from 'image/home/room2.svg';
import room3 from 'image/home/room3.svg';
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import Toast from 'components/ToastMessage/Toast'
import Banner2 from './components/BannerProduct'
import Introduce from 'components/introduce/Introduce'
import BannerToShop from './components/BannerToShop'
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
  }

  const handleClickPrev = () => {
    const products = document.querySelectorAll(".product")
    const productList = document.querySelector(".home-product-list")
    productList.prepend(products[products.length - 1])
  }

  const handleShowToastMessage = () => {
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
    <div className='home'>
      <Slider />
      <div className='home-product'>
        <div className='home-product-slides'>
          <h1>Featured Product</h1>
          <div className='button-slides'>
              <FaChevronLeft onClick={handleClickPrev} />
            <div className='home-product-slideshow'>
              <div className='home-product-list' style={slider.styles}>
                {chairProducts.map((item, index) => {
                  return <Product key={index} product={item} onClicked={handleShowToastMessage} color={Color} changeStyle={true}/>
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
        <Banner2 />
        <Introduce />
        <BannerToShop />
        <div className='home-product-room'>
            <h1>Leatest Blog</h1>
          <div>
            <div className='room-detail'>
              <div> 
                <div>
                  <img src={room1} alt='' />
                  <div style={{margin: 10}}>
                    <span><FaRegUser color='#FB2E86' /> Saber Ali</span>
                    <span><FaRegCalendarAlt color="yellow" /> 21 August, 2020</span>
                  </div>
                </div>
                <div className='title-room'>
                  <h5>Top essential Trends in 2021</h5>
                  <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                </div>
              </div>
            </div>
            <div className='room-detail'>
              <div> 
                <div>
                  <img src={room2} alt='' />
                  <div style={{margin: 10}}>
                    <span><FaRegUser color='#FB2E86' /> Surfauxion</span>
                    <span><FaRegCalendarAlt color="yellow" /> 16 August, 2021</span>
                  </div>
                </div>
                <div className='title-room'>
                  <h5>Top essential Trends in 2021</h5>
                  <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                </div>
              </div>
            </div>
            <div className='room-detail'>
              <div> 
                <div>
                  <img src={room3} alt='' />
                  <div style={{margin: 10}}>
                    <span><FaRegUser color='#FB2E86' /> Ali</span>
                    <span><FaRegCalendarAlt color="yellow" /> 19 August, 2020</span>
                  </div>
                </div>
                <div className='title-room'>
                  <h5>Top essential Trends in 2021</h5>
                  <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Toast />
    </div>
  )
}

export default Home
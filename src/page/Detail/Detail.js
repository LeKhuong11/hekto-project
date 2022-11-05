import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HeaderPage from 'components/Header-page/HeaderPage'
import { FaFacebook, FaGithub, FaRegHeart, FaStar, FaTwitter } from 'react-icons/fa'
import './detail.scss'
import 'components/Button/button.scss'

function Detail() {
  const data = useSelector(state => state.fetchApi)
  const { list } = data;  
  
  //get ip from product list
  const { id } = useParams();
  
  const productDetail = list.filter(item => {
    return item._id.includes(id)
  })

  //render star
  const star = []
  for(let i = 0; i < productDetail[0].star; i++) {
    star.push(<FaStar key={i} color="#FFC416"/>)
  }

  const addToCart = (id) => {
    console.log(id);
  }

  return (
    <div className='detail'>
        <HeaderPage namePage="Product Detail" />
        <div className='detail-body'>
            <div className='detail-body-image'>
              <div>
                <img width={100} src={productDetail[0].img} alt='' />
                <img width={100} src={productDetail[0].img} alt='' />
                <img width={100} src={productDetail[0].img} alt='' />
              </div>
              <img width={300} src={productDetail[0].img} alt='' />
            </div>
            <div className='detail-body-info'>
              <h2>{productDetail[0].name}</h2>
              {star.map(item => (
                item
              ))}
              <div style={{display: 'flex'}}>
                <p>${productDetail[0].price}.000</p>
                <p style={{textDecoration: 'line-through', color: '#FB2E86'}}>${productDetail[0].price}.000</p>
              </div>
              <h4>Color</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
              <button className='button' onClick={() => addToCart(productDetail[0]._id)}>
                Add To Cart 
                <FaRegHeart />
              </button>
              <div style={{display: 'flex'}}>
                <h4>Categories: </h4>
                <p>{productDetail[0].categories}</p>
              </div> 
              <div>
                <h4>Share: </h4>
                <div style={{display: 'flex'}}>
                  <FaFacebook />
                  <FaGithub />
                  <FaTwitter />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Detail
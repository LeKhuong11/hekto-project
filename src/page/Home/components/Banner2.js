import React from 'react'
import productTrending from 'image/home/productTrending.svg'
import EllipseViolet from 'image/contact/Ellipse41.svg';
import EllipsePink from 'image/contact/Ellipse42.svg';
import EllipseBlue from 'image/contact/Ellipse43.svg';
import '../home.scss'

function Banner2() {
  return (
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
  )
}

export default Banner2
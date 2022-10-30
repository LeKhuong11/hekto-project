import React from 'react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import Hekto from '../../image/Hekto.svg'
import './footer.scss'

function Footer() {
  return (
    <div className='footer'>
          <div className='footer-top'>
            <div className='footer-top-content'>
                <div>
                  <img width={80} src={Hekto} alt="logo" />
                  <div className='footer-top-content-submit'>
                   <form>
                    <input type="email" placeholder='Enter Email Address' />
                    <button>Sign Up</button>
                   </form>
                  </div>
                  <p>Contact Info</p>
                  <p>17 princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div>
                  <h3>Catagories</h3>
                  <p>Laptop & Computer</p>
                  <p>Camera & Photography</p>
                  <p>Smart Phone & Tablets</p>
                  <p>Video Games & Consoles</p>
                  <p>Waterpoof & Headerphones</p>
                </div>
                <div>
                  <h3>Customer Care</h3>
                  <p>My Account</p>
                  <p>Discount</p>
                  <p>Returns</p>
                  <p>Order History</p>
                  <p>order Tracking</p>
                </div>  
                <div>
                  <h3>Pages</h3>
                  <p>Blog</p>
                  <p>Browser the Shop</p>
                  <p>Category</p>
                  <p>Pre-Built Pages</p>
                  <p>Visual Composer Element</p>
                </div>  
            </div>
          </div>
          <div className='footer-bottom'>
            <div>
              <p>Webecy - All Rights Reserved</p>
            </div>
            <div style={{display: 'flex'}}>
              <FaFacebook />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>
    </div>
  )
}

export default Footer
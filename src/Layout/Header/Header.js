import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaEnvelope, FaPhoneAlt, FaRegHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Hekto from 'image/Hekto.svg'
import './header.scss'

const languages = [
  {
      language: "English"
  },
  {
      language: "Vietnamese"
  },
  {
      language: "Chinese"
  },
  {
      language: "Korean"
  },
  {
      language: "Japanses"
  },
  {
      language: "German"
  }
]

function Header() {
  const [renderMobile, setRenderMobile] = useState(false);
  
  //get user name
  const user = useSelector(state => state.user)
  const [userName, setUserName] = useState(user.name)

  const handleChange = () => {

  }

  const handleClickMobile = () => {
    setRenderMobile(!renderMobile)
  }
  return (
    <div className='header'>
        <div className='header-info'>
            <div className='header-contact'>
                <div>
                  <FaEnvelope/> 
                  <p>11lekhuong@gmail.com</p>
                </div>
                <div>
                  <FaPhoneAlt/>
                  <p>(12345)67890</p>
                </div>
            </div>
            <div className='header-feature'>
              <div>
                <select onChange={handleChange} className="header-language">
                    {languages.map(option => (
                        <option key={option.language}>{option.language}</option>
                    ))}
                </select>
              </div>
              <div>
                 <Link to="login">
                  <p style={{padding: 2}}>{user.user ? userName : "Login"}</p>
                  <FaUser />
                 </Link>
              </div>
              <div>
                <Link to="wishlist">
                  <p style={{padding: 2}}>Wishlist</p>
                  <FaRegHeart />
                </Link>
              </div>
              <div>
                <Link to="cart">
                  <FaShoppingCart />
                  <p style={{margin: -7}}>[2]</p>
                </Link>
              </div>
            </div>
        </div>
        <div className='header-sidebar'>
            <div>
              <Link to="/">
                <img src={Hekto} alt="" title="logo" />    
              </Link>
            </div>
            <div className='header-menu'>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="products">Products</NavLink>
              <NavLink to="shop">Shop</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <div className='header-search'>
              <input type="text" />
              <div><FaSearch /></div>
            </div>
            <div className='nav-bar-icon'>
              <FaBars color='black' onClick={handleClickMobile}/>
            </div>
        </div>
        <div className='header-menu mobile'>
                {renderMobile && 
                  <div>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="blog">Blog</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                  </div>
                }
            </div>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaEnvelope, FaPhoneAlt, FaRegHeart, FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Hekto from 'image/Hekto.svg'
import './header.scss'
import { AppContext } from 'context/AppContext';

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
  const navigate = useNavigate()
  const { setSearch } = useContext(AppContext)

  const [renderMobile, setRenderMobile] = useState(false);
  const cartItemsLength = useSelector(state => state.cart)
  
  
  //get user name
  const user = useSelector(state => state.user)
  const handleChangeLanguage = () => {

  }

  const handleSearchProduct = (e) => {
    navigate("../products")
    setSearch(e.target.value)
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
                  <p>hekto@store.com</p>
                </div>
                <div>
                  <FaPhoneAlt/>
                  <p>(12345)67890</p>
                </div>
            </div>
            <div className='header-feature'>
              <div>
                <select onChange={handleChangeLanguage} className="header-language">
                    {languages.map(option => (
                        <option key={option.language}>{option.language}</option>
                    ))}
                </select>
              </div>
              <div>
                 <Link to={user.email ? "dashboard" : "login"}>
                  <p style={{padding: 2}}>{user.email ? user.name : "Login"}</p>
                  <FaRegUser />
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
                  <p style={{margin: -7}}>[{cartItemsLength.data.length === 0 ? 0 : cartItemsLength.data.length}]</p>
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
              <input type="text" placeholder='Enter somthing...' onChange={handleSearchProduct} />
              <div><FaSearch /></div>
            </div>
            <div className='nav-bar-icon'>
              <FaBars color='black' onClick={handleClickMobile}/>
            </div>
            <div className=' mobile'>
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
    </div>
  )
}

export default Header
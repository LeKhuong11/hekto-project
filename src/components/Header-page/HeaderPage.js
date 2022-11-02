import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function HeaderPage(props) {
  return (
    <div className='signin-title'>
      <div>
        <h1>{props.namePage}</h1>
        <div className='signin-link'>
          <Link to="/">Home . </Link>
          <Link to="../pages">Pages . </Link>
          <p style={{color: "#FB2E86", margin: 0}}>{props.namePage}</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage
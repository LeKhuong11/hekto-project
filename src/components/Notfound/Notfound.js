import HeaderPage from 'components/Header-page/HeaderPage'
import React from 'react'
import { Link } from 'react-router-dom'
import 'components/Button/button.scss'
import NotFound from 'image/NotFound.svg' 
import Introduce from 'components/introduce/Introduce'

function Notfound() {
  return (
    <div style={{display: 'flex',flexDirection: 'column' ,alignItems: 'center'}}>
        <HeaderPage namePage="Not Found" />
        <img width={700} height={480} src={NotFound} alt="" title="notfound" />
        <button className='button'>
          <Link to="/">Back To Home</Link>
        </button>
        <div>
          <Introduce />  
        </div>
    </div>
  )
}

export default Notfound
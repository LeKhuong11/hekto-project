import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import React from 'react'

function Wishlist() {
  return (
    <div className='wishlist'>
      <HeaderPage namePage="Wish List" />
      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Wishlist
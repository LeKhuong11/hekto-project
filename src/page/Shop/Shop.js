import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import React from 'react'

function Shop() {
  return (
    <div className='shop'>
      <HeaderPage namePage="Shop Left Sidebar" />

      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Shop
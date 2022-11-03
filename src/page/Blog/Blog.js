import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import React from 'react'

function Blog() {
  return (
    <div className='blog'>
      <HeaderPage namePage="Blog" />
      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Blog
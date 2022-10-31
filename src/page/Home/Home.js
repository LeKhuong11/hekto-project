import React from 'react'
import './home.scss'
import '../../components/Button/button.scss'
import light from '../../image/light-header.svg'
import sofa from '../../image/sofa-header.svg'


function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <img width={200} src={light} alt="light" />
        <div>
          <p style={{fontWeight: 550,color: '#FB2E86', margin: 0 }}>Best Furniture For Your Castle...</p>
          <h1 style={{fontSize: 40, margin: "5px 0 10px 0"}}>New Furniture Collection Trend in 2020</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
          <button className='button'>Shop now</button>
        </div>
      </div>
      <div className='home-right'>
        <div>
          <img width={350} alt='sofa' src={sofa}/>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Intro from './Intro'
import './about.scss'
import 'components/Button/button.scss'
import HeaderPage from 'components/Header-page/HeaderPage'
import Group from 'image/about/Group.svg'
import trunk from 'image/about/trunk.svg'
import premium from 'image/about/premium-quality.svg'
import cashback from 'image/about/cashback.svg'
import support24h from 'image/about/24-hours-support.svg'
import person1 from 'image/about/person1.svg'
import person2 from 'image/about/person2.svg'
import person3 from 'image/about/person3.svg'
import { useEffect } from 'react'

const listImg = [
  {
    img: trunk,
    title: 'Free Delivery'
  }, 
  {
    img: cashback,
    title: "100% Cash Bash"
  },
  {
    img: premium,
    title: "24/7 Support"
  }, 
  {
    img: support24h,
    title: "24/7 Support"
  }]


  const persons = [
    {
      name: 'David',
      img: person1,
      class: 'david'
    },
    {
      name: 'Selina Gomez',
      img: person2,
      class: 'selina'
    }, 
    {
      name: 'John Herdeson',
      img: person3,
      class: 'jhon'
    }];

function About() {
  const navigate = useNavigate();
  const handleClickTo = () => {
    navigate("/contact")
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='about'>
      <HeaderPage namePage="About Us" />
      <div className='about-body'>
        <div>
          <img width={360} src={Group} alt='' />
          <div>
            <h2>Know About Our Ecomerce Bussiness, History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='button' onClick={handleClickTo}>Contact US</button>
          </div>
        </div>
        <h1>Our Features</h1>
        <div>
          {listImg.map((item, index) => {
            return <Intro key={index} image={item.img} title={item.title}/>
          })}
        </div>
          <h3>Our Client Say!</h3>
        <div>
          {persons.map((item, index) => {
            return <div> 
                <img 
                  style={{margin: 10}} 
                  width={80}
                  key={index} 
                  src={item.img} 
                  alt=''
                />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import image1 from 'image/blog/img1.svg'
import image2 from 'image/blog/img2.svg'
import image3 from 'image/blog/img3.svg'
import './blog.scss'

function Blog() {
  
  return (
    <div className='blog'>
      <HeaderPage namePage="Blog" />
      <div className='blog-body'>
        <div>
          <div>
            <img src={image1} alt="" />
            <div>
              <span>
                <FaRegUser color='#FB2E86' />
                Surf Axion
              </span>
              <span>
                <FaRegCalendarAlt color="yellow" />
                Surf Axion
              </span>
            </div>
            <div className='body-content-title'>
              <h4>Mauris at orci non vulputate diam tincidunt nec.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            </div>
          </div>

          <div>
            <img src={image2} alt="" />
            <div>
              <span>
                <FaRegUser color='#FB2E86' />
                Surf Axion
              </span>
              <span>
                <FaRegCalendarAlt color="yellow" />
                Surf Axion
              </span>
            </div>
            <div className='body-content-title'>
              <h4>Aenean vitae in aliquam ultrices lectus. Etiam.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            </div>
          </div>

          <div>
            <img src={image3} alt="" />
            <div>
              <span>
                <FaRegUser color='#FB2E86' />
                Surf Axion
              </span>
              <span>
                <FaRegCalendarAlt color="yellow" />
                Surf Axion
              </span>
            </div>
            <div className='body-content-title'>
              <h4>Sit nam congue feugiat nisl, mauris amet nisi. </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Blog
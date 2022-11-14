import HeaderPage from 'components/Header-page/HeaderPage'
import EllipseViolet from 'image/contact/Ellipse41.svg';
import EllipsePink from 'image/contact/Ellipse42.svg';
import EllipseBlue from 'image/contact/Ellipse43.svg';
import EllipseYellow from 'image/contact/Ellipse46.svg';
import EllipseGreen from 'image/contact/Ellipse47.svg';
import contactImg from 'image/contact/contact-image.svg' 
import './contact.scss'
import 'features/reponsive/reponsive.scss'
import 'components/Button/button.scss'

function Contact() {
  return (
    <div className='contact'>
      <HeaderPage namePage="Contact US" />
      <div className='contact-body'>
        <div className='contact-body-info'>
          <div>
            <h2>Information About Us</h2>
            <p style={{width: '85%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div>
              <img src={EllipseViolet} alt='' />
              <img src={EllipsePink} alt='' />
              <img src={EllipseBlue} alt='' />
            </div>
          </div>
          <div className='contact-body-way'>
            <h2>Contact Way</h2>
            <div>
                  <span>
                      <div>
                        <img src={EllipseViolet} alt='' width={40}/>
                        <div>
                          <p>Tel: 877-67-88-99</p>
                          <p>E-Mail: shop@store.com</p>
                        </div>
                      </div>
                      <div>
                      <img src={EllipseYellow} alt='' width={40}/>
                        <div>
                          <p>20 Margaret st, London</p>
                          <p>Great britain, 3NM989-LK</p>
                        </div>
                      </div>
                  </span>
                  <span>
                      <div>
                        <img src={EllipsePink} alt='' width={40}/>
                        <div>
                          <p>Support Forum</p>
                          <p>For over 24h</p>
                        </div>
                      </div>
                      <div>
                        <img src={EllipseGreen} alt='' width={40}/>
                        <div>
                          <p>Free standard shipping</p>
                          <p>on all order</p>
                        </div>
                      </div>
                  </span>
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <div className='contact-form-submit'>
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form>
              <input type='text' placeholder='Your Name*' />
              <input type='text' placeholder='Your E-mail' /> <br />
              <input name='subject' type='text' placeholder='Subject*' /> <br />
              <textarea type='text' placeholder='Type Your Message*' /> <br />
              <button className='button'>Send Mail</button>
            </form>
          </div>
          <div className='contact-form-image'>
            <img alt='' width={500} src={contactImg} />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
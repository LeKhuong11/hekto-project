import './contact.scss'
import HeaderPage from 'components/Header-page/HeaderPage'

function Contact() {
  return (
    <div className='contact'>
      <HeaderPage namePage="Contact US" />
      <div className='contact-body'>
        <div className='contact-body-info'>
          <div>
            <h2>Information About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <h2>Contact Way</h2>
            <div>-----
                <div>
                  <span></span>
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div>
                  <span></span>
                  <div>
                    <p>Support Forum</p>
                    <p>For over 24h</p>
                  </div>
                </div>
            </div>-----
            <div>
                <div>
                  <span></span>
                  <div>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
                <div>
                  <span></span>
                  <div>
                    <p>Free standard shipping</p>
                    <p>on all order</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
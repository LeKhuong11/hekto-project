import { useNavigate } from 'react-router-dom';
import '../home.scss'

function BannerToShop() {
  const navigate = useNavigate();

     //CLick to Shop page
  const handleClickTo = () => {
    navigate("/shop")
  }
  return (
    <div className='home-backgroundImg'>
        <div>
        <h1>Get Leatest Update By Subscribe 0ur Newslater Shop Now</h1>
        <button className='button' onClick={handleClickTo}>Shop Now</button>
        </div>
    </div>
  )
}

export default BannerToShop
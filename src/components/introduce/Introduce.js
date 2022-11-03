import Intro from 'image/introduce.svg'
import './intro.scss'

function Introduce() {
  return (
    <div className='introduce-img'>
        <img src={Intro} alt="" />
    </div>
  )
}

export default Introduce
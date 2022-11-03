import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import './product.scss'


function Product(props) {
    const { img, name, price, priceOld = '' } = props.product;
    const { color, changeStyle } = props;

    console.log(color);
    const handleClickTo = () => {
        
    }
  return (
    <div className='product' onClick={handleClickTo}>
        <img width={150} src={img} alt="" />
        <div className='product-icon' style={changeStyle ? {top: 0, display: 'flex', color: '#1389FF'} : {flexDirection: 'column'}} >
            <FaShoppingCart />
            <FaRegHeart />
        </div>
        <div className='product-info'>
            <h3>{name}</h3>
            <img width={50} height={10} src={color} alt='' />
            <div>
                <p>${price}</p> 
                {priceOld && <p style={{color: '#EC42A2', textDecoration: 'line-through'}}>${priceOld}</p>}
            </div>
        </div>
    </div>
  )
}

export default Product
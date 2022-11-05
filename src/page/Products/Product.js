import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import './product.scss'


function Product(props) {
    const { img, name, price } = props.product;
    const { color, changeStyle } = props;

  return (
    <div className='product'>
        <div className='product-image'>
            <img width={110} height={110} src={img} alt="" />
        </div>
        <div className='product-icon' style={changeStyle ? {top: 0, display: 'flex', color: '#1389FF'} : {flexDirection: 'column'}} >
            <FaShoppingCart />
            <FaRegHeart />
        </div>
        <div className='product-info'>
            <h3>{name}</h3>
            <img width={50} height={10} src={color} alt='' />
            <div>
                <p>${price}</p> 
            </div>
        </div>
    </div>
  )
}

export default Product
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import {  useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { cart } from 'redux/cartSlice';
import './product.scss'


function Product(props) {
    const { _id, img, name, price } = props.product;
    const { color, changeStyle } = props;
    const dispatch = useDispatch();
    
    const handleClickAddToCart = (product) => {
        dispatch(cart(product))
    }   

  return (
    <div className='product'>
        <div className='product-image'>
            <Link to={`detail/${_id}`}>
                <img width={110} height={110} src={img} alt="" />
            </Link>
        </div>
        <div className='product-icon' style={changeStyle ? {top: 0, display: 'flex', color: '#1389FF'} : {flexDirection: 'column'}} >
            <FaShoppingCart onClick={(e) => handleClickAddToCart(props.product)} />
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
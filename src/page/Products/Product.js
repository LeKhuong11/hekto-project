import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import './product.scss'

function Product(props) {
    const { img, name, price, priceOld } = props.product;

    const handleClickTo = () => {
        
    }
  return (
    <div className='product' onClick={handleClickTo}>
        <img width={150} src={img} alt="" />
        <div className='product-icon'>
            <FaShoppingCart />
            <FaRegHeart />
        </div>
        <div className='product-info'>
            <h3>{name}</h3>
            <div>
                <p>${price}</p> 
                <p style={{color: '#EC42A2', textDecoration: 'line-through'}}>${priceOld}</p>
            </div>
        </div>
    </div>
  )
}

export default Product
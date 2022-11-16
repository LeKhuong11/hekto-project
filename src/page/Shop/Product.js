import { useEffect } from 'react';
import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Toast from 'components/ToastMessage/Toast';
import './shop.scss'

function Product(props) {
    const product = props.data;

    //set star for product 
    const star = [];
    if(product.star) {
      for(let i = 0; i < product.star; i++){
        star.push(<FaStar key={i} color="#FFC416"/>)
      }
    }

    //function add to cart
    const handleAddToCart = (product) => {
      toast.success('Wow added so easy!', {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
    <div className="shop-products">
        <div>
          <div style={{width: 250, justifyContent: 'center', cursor: 'pointer'}}>
           <Link to={`detail/${product._id}`}>
            <img width={150} height={150} src={product.img} alt="" />
           </Link>
          </div>
          <div>
              <h4>{product.name}</h4>
              <div className='shop-products-price'>
                  <p>${product.price}.00</p>
                  <p style={{color: '#FF2AAA', textDecoration: 'line-through'}}>${product.price}.00</p>
                  <div>
                    {star ? star.map(item => (
                        item
                    )): <FaStar color="#FFC416"/>}
                  </div>
              </div>
              <p style={{color: '#9295AA', margin: '5px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className='shop-products-icon'>
                <FaShoppingCart color='#111C85' onClick={(e) => handleAddToCart(product)} />
                <FaRegHeart color='#111C85' />
              </div>
          </div>
        </div>
        <div>
        </div>
        <div>
          <Toast />
        </div>
    </div>
  )
}

export default Product
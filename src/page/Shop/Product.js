import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'components/ToastMessage/Toast';
import addToCart from 'features/AddToCart/addToCart';
import './shop.scss'


function Product(props) {
    const product = props.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userCheck = useSelector(state => state.user)
    const { data } = useSelector(state => state.cart)
    let AllItems = [...data];

    //set star for product 
    const star = [];
    if(product.star) {
      for(let i = 0; i < product.star; i++){
        star.push(<FaStar key={i} color="#FFC416"/>)
      }
    }

    //function add to cart
    const handleClickAddToCart = (product) => {
      if(userCheck.email) {
        addToCart(product, navigate, dispatch, AllItems);
      }
      else {
          const isLogin = window.confirm("Sign in to continue.")
          if(isLogin)
          navigate("/login")
      }   
  }   

    return (
    <div className="shop-products">
        <div>
          <div className='detail-img'>
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
                <FaShoppingCart color='#111C85' onClick={(e) => handleClickAddToCart(product)} />
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
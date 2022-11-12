import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaFacebook, FaGithub, FaRegHeart, FaStar, FaTwitter } from 'react-icons/fa'
import Introduce from 'components/introduce/Introduce'
import { Action } from 'components/OrderSusscess/OrderSusscess'
import HeaderPage from 'components/Header-page/HeaderPage'
import './detail.scss'
import 'components/Button/button.scss'
import { cart } from 'redux/cartSlice'

function Detail() {
  const userCheck = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //alert order susscess
  const [orderSusscess, setOrderSusscess] = useState(false) 
  const [product, setProduct] = useState([]);
  
  //get id in params
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fe21-db.herokuapp.com/hekto/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setProduct(data)
      })
  }, [id])

  //set star
  const star = [];
  if(product.star) {
    for(let i = 0; i < product.star; i++){
      star.push(<FaStar key={i} color="#FFC416"/>)
    }
  }
  
  //butotn add to cart
  const addToCart = (product) => {
    if(userCheck.user) {
      setOrderSusscess(true)
      dispatch(cart(product))
    }
    else {
      const isLogin = window.confirm("Sign in to continue.")
      if(isLogin)
        navigate("/login")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='detail'>
        <HeaderPage namePage="Product Detail" />
        <div className='detail-body'>
            <div className='detail-body-image'>
              <div>
                <img width={100} src={product.img} alt='' />
                <img width={100} src={product.img} alt='' />
                <img width={100} src={product.img} alt='' />
              </div>
              <img width={300} src={product.img} alt='' />
            </div>
            <div className='detail-body-info'>
              <h2>{product.name}</h2>
              {star ? star.map(item => (
                item
              )): <FaStar color="#FFC416"/>}
              <div>
                <h4>${product.price}.000</h4>
                <h4 style={{textDecoration: 'line-through', color: '#FB2E86'}}>${product.price}.000</h4>
              </div>
              <h4>Color</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
              <button className='button' onClick={() => addToCart(product)}>
                Add To Cart 
                <FaRegHeart />
              </button>
              <div>
                <h4>Categories: </h4>
                <p>{product.categories}</p>
              </div> 
              <div>
                <h4>Share: </h4>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <FaFacebook />
                  <FaGithub />
                  <FaTwitter />
                </div>
              </div>
            </div>
        </div>
        <div className='detail-description'>
          <div>
              <h2>Description</h2>
              <h3>Varius tempor.</h3>
              <p>{product.description}</p>
          </div>
        </div>
        <Introduce />

        {orderSusscess && <Action />}
    </div>
  )
}

export default Detail
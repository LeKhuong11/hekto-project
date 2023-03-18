import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaFacebook, FaGithub, FaRegHeart, FaStar, FaTwitter } from 'react-icons/fa'
import Introduce from 'components/introduce/Introduce'
import HeaderPage from 'components/Header-page/HeaderPage'
import Toast from 'components/ToastMessage/Toast'
import './detail.scss'
import 'components/Button/button.scss'
import addToCart from 'features/AddToCart/addToCart'
import { Spinner } from 'reactstrap'


function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCheck = useSelector(state => state.user)
  const { data } = useSelector(state => state.cart)
  const [ loading, setLoading ] = useState(false);
  let AllItems = [...data];

  const [product, setProduct] = useState([]);
  
  //get id in params
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    fetch(`https://api-products-gamma.vercel.app/api/products/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoading(false)
        setProduct(data)
      })
  }, [id])

  //set star
  const star = [];
  if(product?.star) {
    for(let i = 0; i < product.star; i++){
      star.push(<FaStar key={i} color="#FFC416"/>)
    }
  }
  
  //butotn add to cart
  const handleAddToCart = (product) => {
    if(userCheck.email) {
     addToCart(product, navigate, dispatch, AllItems);
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
  console.log(product);
  return (
    <>
      {loading ? 
      <div className='loading-detail'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> : 
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
                <button className='button' onClick={() => handleAddToCart(product)}>
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
          <Toast />
      </div>
      }
    </>
  )
}

export default Detail
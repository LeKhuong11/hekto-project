import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaFacebook, FaGithub, FaRegHeart, FaStar, FaTwitter } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { cart } from 'redux/cartSlice'
import Introduce from 'components/introduce/Introduce'
import HeaderPage from 'components/Header-page/HeaderPage'
import Toast from 'components/ToastMessage/Toast'
import './detail.scss'
import 'components/Button/button.scss'


function Detail() {
  const userCheck = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    toast.success('Wow added so easy!', {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    //create a object product new
    const productAdded = {  
      id: product._id,
      name: product.name,
      img: product.img,
      size: product.size,
      price: product.price,
      quantity: 1
  }
    if(userCheck.user) {
      dispatch(cart(productAdded))
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
        
        <Toast />
    </div>
  )
}

export default Detail
import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { AppContext } from 'context/AppContext';
import Color from 'image/color.svg'
import HeaderPage from 'components/Header-page/HeaderPage'
import Product from './Product'
import Introduce from 'components/introduce/Introduce'
import Toast from 'components/ToastMessage/Toast'
import './product.scss'


 function Products() {
  document.title = "Products"
  const { search } = useContext(AppContext)
  
  const data = useSelector(state => state.data)
  const [product, setProduct] = useState(data.data);

  //feature search
  useEffect(() => {
    if(search.length > 0){
      const searchProduct = data.data.filter(item => {
        return item.categories.includes(search.toLowerCase())
      })
      console.log(searchProduct);
      setProduct(searchProduct);
    }
    else {
      setProduct(data.data);  
    }
  }, [search])

  //when data from redux changed to set product  
  useEffect(() => {
    setProduct(data.data)
  }, [data])

  // const handleClickShowToastMessage = () => {
  //   //Show toast message
  //   toast.success('Wow added so easy!', {
  //     position: "top-right",
  //     autoClose: 1800,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }
  const handleClickToWishList = () => {
    toast.warn("We're sorry, this feature hasn't been developed yet!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='products'>
      <HeaderPage namePage="Shop Grid Default" />
      {data.isLoading ? <h1>Loading....</h1> : 
        <div className='products-body'>
        <div className='products-body-list'>
          <h3>Ecommerce Acceories & Fashon item</h3>
          <p>About {product.length} result (0.62 seconds)</p>
          <div>
            {product && product.map((item, index) => (
              <Product onClickedToWishList={handleClickToWishList} key={index} product={item} color={Color} />
            ))}
          </div>
        </div>
        <div>
          <Introduce />
        </div>
          <Toast />
        </div>
      }
    </div>
  )
}

export default Products
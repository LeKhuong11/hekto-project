import { useEffect } from 'react';
import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { cart, cartUpdate } from 'redux/cartSlice';
import Toast from 'components/ToastMessage/Toast';
import './shop.scss'


function Product(props) {
    const product = props.data;
    const dispatch = useDispatch();
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
      //Toast Message
      toast.success('Wow added so easy!', {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });


      let tempProduct = [];
      let getQuantity = 0;
      const productAdded = {  
          id: product._id,
          name: product.name,
          img: product.img,
          size: product.size,
          price: product.price,
          quantity: 1
      }
      if(data) {
          tempProduct = AllItems.filter(item => {
              return item.id.includes(productAdded.id)
          })
      }
      
       //kiem tra neu trong mang co trung nhau thi tang so luong len va xoa phan tu
      if(tempProduct.length >= 1){
          getQuantity = tempProduct[0].quantity;
          productAdded.quantity = getQuantity + 1

          // xoa san pham bi trung sau do update san pham moi len localStorage da cap nhat so luong va gia
          for (let i = 0; i < AllItems.length; i++) {
              if(AllItems[i].id === productAdded.id) {    
                  AllItems.splice(i, 1);
              }
          }
          AllItems.push(productAdded)
          dispatch(cartUpdate(AllItems))
      }
      else {
          dispatch(cart(productAdded))
      }
  }   

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
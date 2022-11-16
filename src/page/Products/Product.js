import { FaRegHeart, FaShoppingCart, FaSistrix } from 'react-icons/fa';
import {  useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { cart, cartUpdate } from 'redux/cartSlice';
import './product.scss'


function Product(props) {
    const { _id, img, name, price } = props.product;
    const { color, changeStyle } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    var { data } = useSelector(state => state.cart)
    
    const handleClickAddToCart = (product) => {
        props.onClicked()
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
            tempProduct = data.filter(item => {
                return item.id.includes(productAdded.id)
            })
        }
        
         //kiem tra neu trong mang co trung nhau thi tang so luong len va xoa phan tu
        if(tempProduct.length >= 1){
            getQuantity = tempProduct[0].quantity;
            productAdded.quantity = getQuantity + 1

            // xoa san pham bi trung sau do update san pham moi len localStorage da cap nhat so luong va gia
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if(data[i].id === productAdded.id) {    
                    data.splice(i, 1);
                }
            }
            data.push(productAdded)
            console.log(data);
            dispatch(cartUpdate(data))
        }
        else {
            dispatch(cart(productAdded))
        }


        //dispatch(cart(productAdded))
    }   

    const handleToDetail = (id) => {
        navigate(`products/detail/${id}`)
    }

  return (
    <div className='product'>
        <div className='product-image'>
            <Link to={`detail/${_id}`}>
                <img width={110} height={110} src={img} alt="" />
            </Link>
            <button onClick={() => handleToDetail(_id)}>View Detail</button>
        </div>
        <div className='product-icon' style={changeStyle ? {top: 0, display: 'flex', color: '#1389FF'} : {flexDirection: 'column'}} >
            <FaShoppingCart onClick={(e) => handleClickAddToCart(props.product)} />
            <FaRegHeart />
            <FaSistrix />
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
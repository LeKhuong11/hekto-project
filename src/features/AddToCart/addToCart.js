import { toast } from 'react-toastify';
import { cart, cartUpdate } from 'redux/cartSlice';

function addToCart(product, navigate, dispatch, AllItems) {
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

    //create a object product new
    const productAdded = {  
      id: product._id,
      name: product.name,
      img: product.img,
      size: product.size,
      price: product.price,
      quantity: 1
    }
    if(AllItems) {
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
        console.log(productAdded);
    }
    else {
        dispatch(cart(productAdded))
    }
 
}

export default addToCart
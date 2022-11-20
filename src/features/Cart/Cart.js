import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HeaderPage from 'components/Header-page/HeaderPage'
import { cartUpdate, clearCart } from 'redux/cartSlice';
import Item from './Item'
import './cart.scss'
import 'components/Button/button.scss'
import NotFoundCart from './NotFoundCart';

function Cart() {
  const dispatch = useDispatch()
  //get info cart items
  const { data } = useSelector(state => state.cart)

  const [cartItems, setCartItems ] = useState(data)
  const [ totals, setTotals ] = useState(0)
  
  const handleDeleteItem = (id) => {
    const newCartItems = cartItems.filter(item => {
      return !item.id.includes(id)
    })

    setCartItems(newCartItems)
  }

  //clear cart
  const handleClearCart = () => {
    const confirm = window.confirm("Are you sure?");
    if(confirm) {
      dispatch(clearCart())
      setCartItems([])
    }
  }

  //hanlde set quantity
  const handleIncreaseQuantity = (id) => {
    setCartItems(cart => 
      cart.map(item => 
        id === item.id ? {...item, quantity: item.quantity + 1} : item
      )  
    )
    
  }
  const handleDecreaseQuantity = (id) => {
    setCartItems(cart => 
      cart.map(item => 
        id === item.id ? {...item, quantity: item.quantity - (item.quantity > 1 ? 1: 0)} : item
      )  
    )
  }
  //kho co su thay doi trong cart se dispatch lai cartItems
  useEffect(() => {
    dispatch(cartUpdate(cartItems))
    let totals = 0
    cartItems.forEach(item => {
      totals += item.quantity * item.price
      setTotals(totals)
    });
  },[cartItems])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='cart'>
      <HeaderPage namePage="Cart" />
      {cartItems.length === 0 ? <NotFoundCart /> :
        <div className='cart-body'>
          <div>
            <div className='cart-body-products'>
              <table>
                  <thead>
                      <tr>
                          <th><h3>Product</h3></th>
                          <th><h3>Price</h3></th>
                          <th><h3>Quantity</h3></th>
                          <th><h3>Total</h3></th>
                      </tr>
                  </thead>
                  <tbody>
                      {cartItems.map((item, index) => {
                        return <Item 
                                  key={index} 
                                  id={item.id} img={item.img} 
                                  quantity={item.quantity}
                                  name={item.name} 
                                  price={item.price} 
                                  onDelete={handleDeleteItem} 
                                  onIncrease={handleIncreaseQuantity}
                                  onDecrease={handleDecreaseQuantity}
                                />
                      })}
                      <tr>
                        <td colSpan={4}></td>
                        <td>
                          <button className='button' onClick={handleClearCart}>Clear Curt</button>
                        </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            
            <div className='cart-totals-shipping'>
              {/* Cart Totals */}
              <table>
                <thead>
                  <tr>
                      <th><h3>Cart Totals</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    <div className='totals'>
                        <div>
                          <div>
                            <h4>Subtotals: </h4>
                            <p>${totals}.00</p>
                          </div>
                          <div>
                            <h4>Totals: </h4>
                            <p>${totals + 60}.00</p>
                          </div>

                          <span>
                            <input type="checkbox" />
                            <label style={{fontSize: 14}}>Shipping & taxes calculated at checkout</label>
                          </span>
                          <button>Proceed To Checkout</button>
                        </div>
                    </div>
                  </td>
                  <td></td>
                </tbody>
              </table>

              {/* Calculate Shopping */}
              <table>
                <thead>
                  <tr>
                      <th><h3>Calculate Shopping</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    <div className='shipping'>
                        <div>
                            <div>
                              <input placeholder='Bangladesh' type='text' />
                            </div>
                            <div>
                              <input placeholder='Mirpur Dhaka - 1200' type='text' />
                            </div>
                            <div>
                              <input placeholder='Postal Code' type='text' />
                            </div>
                        </div>
                          <button style={{margin: "25px 0 0 30px", width: 185, height: 50}} className='button'>Calculate Shipping</button>
                    </div>
                  </td>
                  <td></td>
                </tbody>
              </table>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Cart
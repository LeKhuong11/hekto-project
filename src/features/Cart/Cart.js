import React from 'react'
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
  const carts = useSelector(state => state.cart)
  const { data } = carts;
  const [cartitems, setCartItems ] = useState(data)

  const handleDeleteItems = (id) => {
    const newCartItems = cartitems.filter(item => {
      return !item._id.includes(id)
    })
    setCartItems(newCartItems)
    dispatch(cartUpdate(newCartItems))
  }

  //clear cart
  const handleClearCart = () => {
    dispatch(clearCart())
    setCartItems([])
  }

  return (
    <div className='cart'>
      <HeaderPage namePage="Cart" />
      {cartitems.length === 0 ? <NotFoundCart /> :
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
                      {cartitems.map((item, index) => {
                        return <Item key={index} onDelete={handleDeleteItems} id={item._id} img={item.img} name={item.name} price={item.price} />
                      })}
                      {cartitems.length > 0 && <tr>
                        <td>
                          <button className='button'>Update Curt</button>
                        </td>
                        <td colSpan={3}></td>
                        <td>
                          <button className='button' onClick={handleClearCart}>Clear Curt</button>
                        </td>
                      </tr>}
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
                            <p>$219.00</p>
                          </div>
                          <div>
                            <h4>Totals: </h4>
                            <p>$219.00</p>
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
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap' ;
import { useNavigate } from 'react-router-dom';
import HeaderPage from 'components/Header-page/HeaderPage';
import ItemCheckout from './ItemCheckout';
import { useDispatch } from 'react-redux'
import { clearCart } from 'redux/cartSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cart.scss'
import 'components/Button/button.scss'


function Checkout() {
    const navigate = useNavigate();
    const { data } = useSelector(state => state.cart)
    const [ cartItems, setCartItems] = useState(data)
    const dispatch = useDispatch();
    
    const handleClickOrder = () => {
        dispatch(clearCart())
        navigate("order-susscess");
    }

  return (
    <div className='checkout'>
        <div className='checkout-header'>
            <HeaderPage namePage="Checkout" />
        </div>
        <div className='checkout-body'>
            <div>
                <div className='form-checkout'>
                    <Form>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                Your Email
                                </Label>
                                <Input
                                required
                                id="exampleEmail"
                                name="email"
                                placeholder="With Email a placeholder"
                                type="email"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampName">
                                Your Name
                                </Label>
                                <Input
                                id="examplePassword"
                                name="name"
                                placeholder="Name placeholder"
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">
                            Address
                            </Label>
                            <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">
                            Message for shop
                            </Label>
                            <Input
                            id="exampleAddress2"
                            name="address2"
                            placeholder="Write here"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">
                                City
                                </Label>
                                <Input
                                id="exampleCity"
                                name="city"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">
                                State
                                </Label>
                                <Input
                                id="exampleState"
                                name="state"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">
                                Zip
                                </Label>
                                <Input
                                id="exampleZip"
                                name="zip"
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                            />
                            <Label
                            check
                            for="exampleCheck"
                            >
                            Check me out
                            </Label>
                        </FormGroup>
                        <input 
                            onClick={handleClickOrder}  
                            className='button' 
                            type="submit" 
                            value="Order" 
                        />
                    </Form>
                </div>
                <div className='infor-cart'>
                    <h4>Cart Items</h4>
                    <div>
                        {cartItems.map((item, index) => {
                            return <ItemCheckout 
                                        img={item.img} 
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
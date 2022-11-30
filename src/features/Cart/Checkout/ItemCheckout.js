import React from 'react'

function ItemCheckout(props) {
  return (
    <div className='product-checkout'>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={props.img} width={55} alt=""/>
            <p>{props.name}</p>
        </div>
        <div>
            <p>${props.price}.00</p>
            <p>Qty: {props.quantity}</p>
        </div>
    </div>
  )
}

export default ItemCheckout
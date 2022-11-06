import { useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import './shop.scss'

function Shop() {
  const dataList = useSelector(state => state.data)
  const { data } = dataList;
  
  //state
  const [showProduct, setShowProduct] = useState(data);



  return (
    <div className='shop'>
      <HeaderPage namePage="Shop Left Sidebar" />
      <div className='shop-body'>
        <div>
          <h2>Ecommerce Acceories & Fashion item </h2>
          <p>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className='shop-body-content'>
          <div className='choose-type'>
            <h3>Product Brand</h3>
              <div>
                {showProduct.map(item => {
                  return <>
                    <input type="checkbox" name={item.name} value={item.brand} />
                    <label>{item.brand}</label> <br/> 
                  </>
                })}
              </div>
          </div>
          <div className='show-products'></div>
        </div>
      </div>
      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Shop
import { useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderPage from 'components/Header-page/HeaderPage'
import Introduce from 'components/introduce/Introduce'
import Product from './Product'
import { useEffect } from 'react'
import './shop.scss'
import { Link } from 'react-router-dom'

function Shop() {

  //get data from redux
  const dataList = useSelector(state => state.data)
  const { data } = dataList;

  //state
  const [showProduct, setShowProduct] = useState(data);
  const [brand ,setBrand ] = useState([])
  const [discount, setDiscount ] = useState([])

  useEffect(() => {
    setShowProduct(dataList.data)
  }, [dataList])
  
  function handleCheckbox(input) {
    let newProducts = []
    const value = input.target.value.toString();
    const name = input.target.name;
    
    if(input.target.checked) {
        //set brand
        if(name === "brand") {
          const newBrand = [...brand, value]
          setBrand(newBrand)

          for(let i = 0; i < newBrand.length; i++) {
            for(let j = 0; j < data.length; j++){
              if(data[j].brand === newBrand[i])
                newProducts.push(data[j])
            }
          }
        }
        //Set discoint ofder
        if(name === "discount") {
          const newDiscount = [...discount, value * 1]
          setDiscount(newDiscount)
            
          if(brand.length !== 0){
            console.log(brand);
            for(let i = 0; i < newDiscount.length; i++) {
              for(let j = 0; j < showProduct.length; j++){
                if(showProduct[j].discouter === newDiscount[i]){
                  newProducts.push(showProduct[j])
                }
              }
            }
          }
          else {
            console.log(discount);
            for(let i = 0; i < newDiscount.length; i++) {
              for(let j = 0; j < data.length; j++){
                if(data[j].discouter === newDiscount[i])
                  newProducts.push(data[j])
              }
            }
          }
        }
        setShowProduct(newProducts)
    }
    else {
      const delBrand = brand.filter(item => {
        return !item.includes(value)
      })
      const delDiscount = discount.filter(item => {
        return item !== value * 1
      })
      if(delBrand.length === 0 && delDiscount.length === 0) { 
        setShowProduct(data)
      }
      else {
     
          for(let i = 0; i < delBrand.length; i++) {
            for(let j = 0; j < data.length; j++){
              if(data[j].brand === delBrand[i])
                newProducts.push(data[j])
            }
          }
          for(let i = 0; i < delDiscount.length; i++) {
            for(let j = 0; j < data.length; j++){
              if(data[j].discouter === delDiscount[i])
                newProducts.push(data[j])
            }
          }
        setShowProduct(newProducts)
      }
      setBrand(delBrand)
      setDiscount(delDiscount)
    }
  }

  //Brand
  const productsBrand = [
    'Coaster Furniture',
    'Fusion Dot High Fashion',
    'Unique Furnitture Restor',
    'Dream Furnitture Flipping',
    'Young Repurposed',
    'Green DIY furniture'
  ]
  const categories = ['Bags', 'Watch', 'Camera', 'Headphone', 'Chair' ]
  return (
    <div className='shop'>
      <HeaderPage namePage="Shop Left Sidebar" />
      <div className='shop-body'>
          <div>
            <div>
              <h2>Ecommerce Acceories & Fashion item </h2>
              <p>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className='shop-body-content'>
              <div className='choose-type'>
                <div className='choose-type-brand'>
                  <h4>Product Brand</h4>
                    <form>
                      {productsBrand.map((item, index) => {
                        return <div key={item}>
                          <input onChange={handleCheckbox} type="checkbox" name="brand" value={item} />
                          <label>{item}</label> <br/> 
                        </div>
                      })}
                    </form>
                </div>
                <div className='choose-type-discount'>
                      <h4>Discount Offer</h4>
                      <form>
                        <input onChange={handleCheckbox} type="checkbox" name="discount" value="0" />
                        <label>No Discount</label> <br/> 
                        <input onChange={handleCheckbox} type="checkbox" name="discount" value="5" />
                        <label>5% Cashback</label> <br/> 
                        <input onChange={handleCheckbox} type="checkbox" name="discount" value="10" />
                        <label>10% Cashback Offer</label> <br/> 
                        <input onChange={handleCheckbox} type="checkbox" name="discount" value="15" />
                        <label>15% Discount Offer</label> <br/> 
                        <input onChange={handleCheckbox} type="checkbox" name="discount" value="20" />
                        <label>20% Cashback Offer</label> <br/> 
                      </form>
                </div>
                <div className='choose-type-categories'>
                <h4>Categories</h4>
                    <form>
                        {categories.map((item, index) => {
                          return <div key={item}>
                            <input onChange={handleCheckbox} type="checkbox" name="categories" value={item} />
                            <label>{item}</label> <br/> 
                          </div>
                        })}
                    </form>
                </div>
              </div>
              <div className='show-product-list'>
                  {showProduct && showProduct.map((item, index) => {
                    return <div  key={index}>
                        <Product key={index} data={item}/>
                    </div>
                  })}
              </div>
          </div>
        </div>
      </div>
      <div>
        <Introduce />
      </div>
    </div>
  )
}

export default Shop
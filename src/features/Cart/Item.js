import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Item(props) {
    const { 
        id, 
        img, 
        name, 
        price, 
        quantity, 
        onDelete,
        onIncrease,
        onDecrease 
    } = props
  return (
    <tr>
        <td>
            <div>
                <img width={65} src={img} alt="" />
                <div>
                    <h4>{name}</h4>
                    <p>Color: Brown</p>
                    <p>Size: XL</p>
                </div>
            </div>
        </td>
        <td>${price}.00</td>
        <td><FaChevronLeft onClick={() => onDecrease(id, quantity)} />{quantity}<FaChevronRight onClick={() => onIncrease(id, quantity)}/></td>
        <td>${price*quantity}.00</td> 
        <td>
            <input type="submit" onClick={(e) => onDelete(id)} value="x" />
        </td>
    </tr>
  )
}

export default Item
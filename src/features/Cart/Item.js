
function Item(props) {
    const { onDelete, id, img, name, price } = props
  return (
    <tr>
        <td>
            <div>
                <img width={100} src={img} alt="" />
                <div>
                <h4>{name}</h4>
                <p>Color: Brown</p>
                <p>Size: XL</p>
                </div>
            </div>
        </td>
        <td>${price}.00</td>
        <td>3</td>
        <td>$64.00</td> 
        <td>
            <input type="submit" onClick={(e) => onDelete(id)} value="Delete" />
        </td>
    </tr>
  )
}

export default Item
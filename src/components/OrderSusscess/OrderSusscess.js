import { FaCheckCircle } from "react-icons/fa";
import './orderSusscess.scss'

export function Action() {
 
    return (
        <div id="added">
            <div className="added">
                <div className="icon__susces">
                    <FaCheckCircle />
                </div>
                <div className="body">
                    <div><h4>Order susscessfuly!</h4></div>
                    <div className="content">Added to cart</div>
                </div>
            </div>
        </div>
    )
 }


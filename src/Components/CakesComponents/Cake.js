import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/CartSlice";

const Cake = ({cake}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return(
        <div> 
            <img src={`${cake.img}.avif`}/>
            <h2>{cake.name}</h2>
            <p>$ {cake.price}</p>
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
            
            <button onClick={() => {dispatch(addItemToCart({cake, quantity}))}} >Add to cart</button>
        </div>
    )

}
export default Cake;
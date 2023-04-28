import DataCakes from "../../Data/DataCakes"
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/CartSlice";


const CartItem = ({cartItem}) => {
    const cakes = DataCakes.find(item => item.id ===cartItem.cakeId)
    const dispatch = useDispatch();
    return(
        <div> 
            <p>{cakes.name}</p>
            <p> QTY: {cartItem.quantity} </p> 
            <p>Price: $ {cakes.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>
        </div>
    )
}
export default CartItem
import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../Redux/CartSlice"
import CartItem from "./CartItem"

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div> 
            <h3> YOUR ORDER:</h3> 
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} /> )}
            <h3>TOTAL: $ {totalPrice}</h3>
        </div>
    )
}
export default Cart
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
        render() {
                return(
                    <div className="cart">
                        <h3>Hello user</h3>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                )
        }
}

export default Cart;
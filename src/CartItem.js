/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class CartItem extends React.Component {
        render () {
                return (
                        <div className="cart-item">
                                <div className="left-block">
                                        <img style={styles.Image} />
                                </div>
                                <div className="right-block">
                                        <div style={ {fontSize: 25} }>Phone</div>
                                        <div style={ {color: '#777'} }>Rs 999</div>
                                        <div style={ {color: '#777'} }>Qty: 1</div>
                                        <div className="cart-item-actions left-block">
                                                {/* Button */}
                                               
                                        </div>
                                </div>
                        </div>
                        
                );
        }
}

const styles = {
        Image: {
                height: 110,
                width: 110,
                borderRadius: 4,
                background: '#ccc'
        }
}

export default CartItem;
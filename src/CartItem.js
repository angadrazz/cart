/* eslint-disable jsx-a11y/alt-text */

import React from "react";

class CartItem extends React.Component {
        constructor (){
                super();
                this.state = {
                        price: 999,
                        title: 'phone',
                        qty: 1,
                        img: ''
                }
                //this.increaseQuantity = this.increaseQuantity.bind(this);
        }
        increaseQuantity =  () => {
                //console.log('this', this.state);
                this.setState({
                  qty: this.state.qty + 1
                });
        }
        decreaseQuantity = () => {
          this.setState({
            qty: this.state.qty - 1
          })
        }
  render() {
        
        const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.Image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25, color: "blue" }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions left-block">
            {/* Button */}
            <img
              alt="increase"
              className="action-icons"
              src="https://as1.ftcdn.net/v2/jpg/03/30/25/74/1000_F_330257485_WEd8LDmLkdp4vbJjhbLY263gV0OvsiIF.jpg"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/02/44/39/19/1000_F_244391909_DfS5TL9Oyzhf4VW0v9gPq4FPDg3BtD9w.jpg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
            />
            
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
    background: "#ccc",
  },
};

export default CartItem;

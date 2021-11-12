import React, { Component } from "react";
import formatCurrency from "./Util";

export class Cart extends Component {
  render() {
    //from props get cartItems
    const { cartItems } = this.props;
    return (
      <div>
        {console.log(cartItems.length)}
        {cartItems.length === 0 ? (
          <div className="empty-cart"> cart is empty</div>
        ) : (
          <div className="cart cart-header">
            {" "}
            you have {cartItems.length} items in the cart{" "}
          </div>
        )}

        <div>
          <div className="cart">
            <div>
              <ul className="cart-items">
                {/* //to map cart items to li elements  */}
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.image}></img>
                    </div>
                    <div>
                      <div> {item.title}</div>
                      <div className="right-part">
                        {formatCurrency(item.price)}x{item.count}
                      </div >
                        <div className="cart-button">
                      <button  onClick={() => this.props.addToCart(item)}>
                        {" "}
                        +{" "}
                      </button>
                      <button onClick={() => this.props.removeFromCart(item)}>
                        Remove{" "}
                      </button>
                      <button onClick={() => this.props.reduceFromCart(item)}>
                        {" "}
                        -{" "}
                      </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="cart"> */}
            <div>
              <div className="total">
                <div className="total">
                  {" "}
                  SUBTOTAL :
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
              </div>
            </div>

            <div className="check-out">
             
             <button onClick= { () =>{
                 alert("you are logging out  your data will be lost  ");
                window.location.reload() ;

              }  } > CHECKOUT </button>
                
                 </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

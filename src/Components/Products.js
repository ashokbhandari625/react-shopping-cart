import React, { Component } from "react";
import formatCurrency from "./Util";

class Products extends Component {
   
  render(props) {
     
    return (
      <div  className="products">
          {/* { console.log( this.props.products)} */}
      
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              
              <div className="product" onClick={()=>this.props.addToCart(product)} >
                <a href="#">
                  {/* <img src = "/images/12064273040195392_1.jpg" alt = {product.title} />  */}
                   
                 <div className="free-shiping" >
                   Free Shiping</div>
                   
                  <img src= {product.image} alt={product.title} />

                  <p className = "product-title">{product.title} </p>
                </a>
              </div>
              <div className="product-price">
                <div>{formatCurrency(product.price) }</div>

                <div>
                  <button onClick={()=> this.props.addToCart(product)} className="button primary"> Add to cart </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;

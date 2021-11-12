import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import Filter from "./Components/Filter";
import Products from "./Components/Products";
import data from "./data.json";
import Cart from "./Components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // products: JSON.parse( data.products) ,
      products: data.products,

      size: "",
      sort: "",
      cartItems: [],
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    this.setState({
      cartItems: cartItems.filter((x) => x._id != product._id),
    });
  };

  reduceFromCart= (product)=>{
    
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = true ;
    cartItems.forEach((item) => {
      if (item._id === product._id && item.count> 0 ) {
        item.count--;
        if( item.count <= 0 )
      
        this.setState({
          cartItems: cartItems.filter((x) => x._id != product._id),
        });
      }
    });

    this.setState({
      cartItems: cartItems,
    });
  }


  addToCart = (product) => {
    // copy of items
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      // copying any   instance of product along with the its count
      cartItems.push({ ...product, count: 1 });
    }
    //after adding new elements in cart we need to update the state

    this.setState({
      cartItems: cartItems,
    });
  };
 



  sortProducts = (event) => {
    const sort = event.target.value;
    // console.log( event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "Lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "Highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      console.log(event.target.value);
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header className ="headerImages">
         {/* <img className="git-image" src ="/images/GitHub-Mark.png" />  */}
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />

              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
           

            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                addToCart = {this.addToCart}
                  reduceFromCart = {this.reduceFromCart}
                
                

              />
               </div>
            </div>
          </div>
        </main>

       
      </div>
    );
  }
}

export default App;

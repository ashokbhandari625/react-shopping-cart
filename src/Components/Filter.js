import React, { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">
         
          {this.props.count + "  product(s) found "} 
         
        </div>
        <div className="filter-sort">
          Order By
          {/* it will take value that comes from app.js */}
          <select className="select-order" value = {this.props.sort} onChange={this.props.sortProducts}>
            <option> Select</option>
            <option value="Lowest">Lowest to Highest </option>
            <option value="Highest">Highest to Lowest </option>
          </select>
        </div>

<div className="clothSize">
<div className = "sizeText"> Size </div>
<div className ="clothSizeButton"> 
<button  type ="text" value ="XS" onClick={this.props.filterProducts} > XS </button>

<button type ="text"  value ="S" onClick={this.props.filterProducts} > S </button>
 
<button type ="text"  value ="M"  onClick={this.props.filterProducts} > M </button>
<button type ="text"  value ="L" onClick={this.props.filterProducts} > L </button>
<button type ="text"  value ="XL" onClick={this.props.filterProducts} > XL </button>
<button type ="text"  value ="XXL" onClick={this.props.filterProducts} > XXL</button>
</div>
</div>
       
           
        
      </div>
    );
  }
}

export default Filter;

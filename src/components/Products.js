import React from 'react'
import "./products.css";
const Products = () => {
  return (
    <div><div class="card">
    <img src="jeans3.jpg" alt="Denim Jeans" style={{width:"100%"}}/>
    <h1>Tailored Jeans</h1>
    <p class="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button>Add to Cart</button></p>
  </div>
  </div>
  )
}

export default Products
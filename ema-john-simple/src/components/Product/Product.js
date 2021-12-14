import React from 'react';
import './Product.css'

const Product = (props) => {
  console.log(props)
  const {name, img, seller, price, stock} = props.product;
  return (
    <div className="product">
      <div>
      <img src={img} alt="" />
      </div>
      <div>
      <h2 className='product-name'>{name}</h2>
      <p> <small>By: {seller}</small></p>
      <p>Price:{' '+price}$</p>
      <p><small>only {stock} left in stock - order soon</small></p>
      <button 
      onClick={props.handleAddToCart}
      className='btn-regular'
      >Add to Cart</button>

      </div>
      
    </div>
  );
};

export default Product;
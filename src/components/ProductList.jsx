// ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/App.css';


const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className='ProductList'>
  
      <ul type='none'>
        {products.map((product) => (
        
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"></img>
            <h4>{product.description}</h4>
            <h4>{product.brand}</h4>
            
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

    
      
    </div>
  );
};

export default ProductList;

import React from 'react';
import data from '../data';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div>
      <h2>Featured Products</h2>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}></Link>
            <img src={product.image} alt={product.name}></img>
            <diV className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </diV>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/Components/Popular/Popular.js

import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className="hr-container">
        <hr />
      </div>
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div key={i} className="product-item">
            <div className="product-content">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>
                <strong>${item.new_price}</strong>
                {item.old_price && <span> <s>${item.old_price}</s></span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;

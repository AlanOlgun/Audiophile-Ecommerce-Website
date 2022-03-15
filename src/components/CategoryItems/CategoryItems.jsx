import React, { useState, useEffect } from 'react';
import './CategoryItems.css';
import { Link } from "react-router-dom";
import data from '../../data';




function CategoryItems (props)  {
  const { product } = props;
  

  return  <div className='ProductPageCard'>
     
      <div className='ProductPageCards'>

        <div className='Card-Left'>
        <img src={product.image.desktop} alt={product.slug} />
        </div>

        <div className='Card-Right'>
          <div className='Right-Content'>
            <h5>NEW PRODUCT</h5>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          <button ><Link to={`/ProductDetailPage/${product.id}`}>SEE PRODUCT</Link> </button>
          </div>
        </div>

      </div>
    
  </div>;
 
};

export default CategoryItems;

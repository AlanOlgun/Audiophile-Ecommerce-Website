import './Categories.css';
import React from 'react';
import { Link } from "react-router-dom";
import Headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import Earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"
import Speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"


function Categories (props) {
  const { product } = props;

  return <div className='Product'>

     <div className='Product-Cards'>
         <div className='Product-Card'>
            <img src={Headphones} alt="" />
             <h3>Headphones</h3>
             <Link to="headphones">SHOP  &nbsp; <svg width="8" height="12" line-height="18px" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> </Link>
      
         </div>

         <div className='Product-Card'>
            <img src={Speakers} alt="" />
             <h3>SPEAKERS</h3>
             <Link to="speakers">SHOP  &nbsp; <svg width="8" height="12" line-height="18px" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> </Link>

         </div>

          <div className='Product-Card'>
            <img src={Earphones} alt="" />
             <h3>EARPHONES</h3>
             <Link to="earphones">SHOP  &nbsp; <svg width="8" height="12" line-height="18px" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> </Link>
         </div>
     </div>
  </div>;
};

export default Categories;

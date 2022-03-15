import './CategoryItem.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import HeadphoneIntro from '../../components/ProductPageIntro/HeadphoneIntro';
import Product from '../../components/Categories/Categories';
import Description from '../../components/Description/Description';
import Footer from '../../components/Footer/Footer';

const Productpage = (props) => {
  const { product } = props;
return( 
 <>

<div className='DetailPageCard'>
      
    <div className='DetailContent'>
    <div className='GoBack'>
    <Link to="headphones">Go Back</Link>
    </div>

     {/* Product Card */}
    <div className='DetailPageCards'>

      <div className='DetailCard-Left'>
      <img src={product.image.desktop}  alt="" />
      </div>

{/* <div className='DetailCard-Left'>
      <img src={product.image} />
      </div> */}


      <div className='DetailCard-Right'>
        <div className='DetailRight-Content'>
          <h5>NEW PRODUCT</h5>
          {/* <h1>{product.name}</h1> */}
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
           <h3>$ {product.price}</h3>
           <div className='AddCard'>
               <div className='Quantity'>
                   <p> - </p>
                   <p className='Number'> 2 </p>
                   <p> + </p>
               </div>
        <button>Add to Card</button>
        </div>
        </div>
      </div>
    </div>
    </div>
      {/* Description */}
    <div className='Features'>
    <div className='FeaturesLeft'>
       <h1>FEATURES</h1> 
       <p>
       "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br /> <br /> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
       </p>
        </div>    

        <div className='FeaturesRight'>
            <div className='BoxTitle'>
            <h1>IN THE BOX</h1></div>

            <div className='Includes'>

                <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>Headphone Unit</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>2 x</p>
             <p className='IncludesItem'>Replacement Earcups</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>User Manual</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>3.5mm 5m Audio Cable</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>Travel Bag</p>
             </div>
           </div> 
            
           
        </div>
   </div>
      {/* Gallery*/}
      <div className='DetailPageGallery'> 
          <div className='PageGallery'>
          <div className='GalleryLeft'>
          <img src={product.gallery.first.desktop}  alt="" />
          <img src={product.gallery.second.desktop}  alt="" />
          </div>
          <div className='GalleryRight'>
          <img src={product.gallery.third.desktop}  alt="" />
          </div>
          </div>
      </div>
   
   
    </div>
  
    </> 
    )
    };
   


export default Productpage;


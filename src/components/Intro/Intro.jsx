// import React from 'react';
import './Intro.css';
// import Hero from "../../images/assets/home/desktop/image-hero.jpg"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Desktop from "../../images/assets/home/desktop/image-hero.jpg"
import Mobile from "../../images/assets/home/mobile/image-header.jpg"
import Tablet from "../../images/assets/home/tablet/image-header.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 1100 ? Desktop : windowWidth >= 576 ? Tablet : Mobile;

  useEffect (() => {
    Aos.init();
}, [] );


  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return <div className='Intro'>
      <div className='Section'>

      <div className='left'>
        <div className='Left-Desc'>
          <h5 data-aos="zoom-in" data-aos-duration="3000">NEW PRODUCT</h5>
          <h1 data-aos="fade-right" data-aos-duration="3000">XX99 MARK II</h1>
              <h1 data-aos="fade-left" data-aos-duration="3000"> HEADPHONES</h1>
          <p data-aos="zoom-in" data-aos-duration="3000">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button data-aos="zoom-in" data-aos-duration="3000" ><Link to="XX99IIproduct">SEE PRODUCT</Link> </button>
      </div>
      </div>
      <div className='right' data-aos="zoom-in" data-aos-duration="3000">
         <img src={imageUrl} alt="" />
         
      </div>
  </div>
  </div>
};



export default Intro;

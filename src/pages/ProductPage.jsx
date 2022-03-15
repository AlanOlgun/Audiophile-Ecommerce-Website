import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import HeadphoneIntro from '../components/ProductPageIntro/HeadphoneIntro';
import Product from '../components/Categories/Categories';
import Description from '../components/Description/Description';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories';
import data from '../data';
import CategoryItems from '../components/CategoryItems/CategoryItems';





export default function ProductPage ()  {
    const {products} = data;
    
  return (
    <div>
    
   <Navbar/>
        <HeadphoneIntro/>
        
        {products.map((product) => (
          <CategoryItems key={product.id} product={product} ></CategoryItems>
        ))} 
          
          {/* {products.map((product) => (
          <ProductDetail key={product.id} product={product} ></ProductDetail>
        ))}
    */}
        <Product/>
        <Description/>
        <Footer/>
    </div>
  )
}

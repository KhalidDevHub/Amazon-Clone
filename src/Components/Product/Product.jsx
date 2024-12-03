import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      // console.log(res);
      setProducts(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <section className={classes.products_container}>
      {products.map((singleProduct, i) => (
        <ProductCard product={singleProduct} key={i} />
      ))}
    </section>
  );
}

export default Product
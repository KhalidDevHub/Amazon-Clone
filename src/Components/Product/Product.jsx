import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loader from '../../Components/Loader/Loader'
const Product = () => {
  const [products,setProducts]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      // console.log(res);
      setProducts(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      setIsLoading(false)
      console.log(err);
    })
  },[])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct, i) => (
            <ProductCard product={singleProduct} key={i} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product
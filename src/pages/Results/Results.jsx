import React, { useEffect, useState } from "react";
import LayOut from '../../Components/LayOut/LayOut';
import classes from "./Results.module.css";
import {useParams} from 'react-router-dom'
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const {categoryName}=useParams()
  const [isLoading,setIsLoading]=useState(false)
  // console.log(categoryName);
  const [results, setResults]=useState([]);
useEffect(()=>{
  setIsLoading(true)
 axios.get(`${productUrl}/products/category/${categoryName}`)
.then((res)=>{
setResults(res.data)
setIsLoading(false)
}).catch((err)=>{
  setIsLoading(false)
  console.log(err);
})
},[])

  return (
    
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category /{categoryName}</p>
          <br />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true} renderDesc={false}/>
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
};

export default Results;

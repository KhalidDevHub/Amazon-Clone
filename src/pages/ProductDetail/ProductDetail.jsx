import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { productUrl } from "../../Api/EndPoint";
import ProductCard from '../../Components/Product/ProductCard'

const ProductDetail = () => {
 const [product, setProduct] = useState({});
  const { productId } = useParams();
  
  // console.log(productId);
  useEffect(()=>{
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
};

export default ProductDetail;

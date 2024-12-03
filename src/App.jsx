import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/Carousel Effect/CarouselEffect';
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';
const App = () => {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default App

import React from 'react'
import classes from "./carouseleffect.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }from 'react-responsive-carousel'
import { img } from "./images/ImagesDate";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect
import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data}) {
  // console.log(data) ;
  return (
    <div className={classes.category}>
      <a href=''>
        <span>
          <h3>{data.title}</h3>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;

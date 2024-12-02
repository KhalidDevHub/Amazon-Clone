import React from "react";
import classes from "./header.module.css";
import Logo from "../../assets/images/amazon_PNG11.png";
import FlagUSA from '../../assets/images/Flag.png'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <a href="/">
              <img src={Logo} alt="amazon logo" />
            </a>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>

              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            {/* icon */}
            <BsSearch size={25} />
          </div>
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img src={FlagUSA} alt="usa flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* three components */}
            <a href="">
              <p>Hello, sign in</p>
              <span>
                <select name="" id="">
                  <option value="">Account & Lists</option>
                </select>
              </span>
            </a>
            {/* Orders */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* Cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <p>Cart</p>
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;

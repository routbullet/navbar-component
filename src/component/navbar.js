import React from "react";
import { motion } from "framer-motion";
import "./sass/navbar.scss";
import { Home, Account, Setting, Category } from "./icons";
// import home from "/public/assets/home.svg";

export const NavbarComponent = () => {
  return (
    <motion.div className="side-nav-container" animate={{ width: "290px" }}>
      <div className="nav-logo">
        <h2>Nav Logo</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            {/* <img src="../../public/assets/home.svg" alt="" /> */}
            <Home logoWidth={30} />
            <h3>Home</h3>
          </li>
          <li>
            <Category logoWidth={30} />
            <h3>Category</h3>
          </li>
          <li>
            <Setting logoWidth={30} />
            <h3>Setting</h3>
          </li>
          <li>
            <Account logoWidth={30} />
            <h3>Account</h3>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

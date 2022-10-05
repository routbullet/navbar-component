import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sass/navbar.scss";
import { ICONS } from "./iconRoutes.js";

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="side-nav-container" animate={{ width: "210px" }}>
      <div className="nav-logo">
        <h2>LOGO</h2>
        <img src={ICONS.TOGGLE} style={{ width: "30px" }} alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <img src={ICONS.HOME} style={{ width: "30px" }} alt="" />
            <h3>Home</h3>
          </li>
          <li>
            <img src={ICONS.CATEGORY} style={{ width: "30px" }} alt="" />

            <h3>Category</h3>
          </li>
          <li>
            <img src={ICONS.SETTING} style={{ width: "30px" }} alt="" />

            <h3>Setting</h3>
          </li>
          <li>
            <img src={ICONS.ACCOUNT} style={{ width: "30px" }} alt="" />
            <h3>Account</h3>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

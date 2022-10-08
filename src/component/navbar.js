import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sass/navbar.scss";
import { NAV_ROUTE } from "./navRouts";

export const NavbarComponent = () => {
  const [isClose, setIsClose] = useState(false);
  const toggle = () => {
    setIsClose(!isClose);
  };

  const toggleIcon = process.env.PUBLIC_URL + "/assets/toggle.svg";
  return (
    <motion.div
      className="side-nav-container"
      animate={{
        width: isClose ? "56px" : "210px",
        transition: {
          duration: ".8s",
          type: "spring",
          damping: 12,
        },
      }}
    >
      <div className="nav-logo">
        {!isClose && <h2>LOGO</h2>}
        <img
          onClick={toggle}
          src={toggleIcon}
          style={{
            width: "30px",
            transform: isClose ? "rotate(0deg)" : "rotate(180deg)",
            transition: isClose ? "transform .9s" : "transform .8s",
          }}
          alt=""
        />
      </div>

      {NAV_ROUTE.map((route) => (
        <div className="nav-links">
          <ul>
            <li>
              <img src={route.linkIcon} style={{ width: "30px" }} alt="" />
              <h3>{route.linkName}</h3>
            </li>
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

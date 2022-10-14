import React, { useState, useEffect, useCallback, useRef } from "react";
import CTANav from "./CTANav";
import MegaMenu from "./MegaMenu";
import styles from './Navbar.module.css'; 
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const curLoc = useRef(false);
  const navigate = useNavigate();
  
  if (
    location.pathname.includes("signin") ||
    location.pathname.includes("register") ||
    location.pathname.includes("payment") ||
    location.pathname.includes("cart") ||
    location.pathname.includes("ordersuccess")
  ) {
    curLoc.current = true;
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

 const handleScroll = useCallback(() => {
   const currentScrollPos = window.pageYOffset;
   setVisible((prev) => prev=(currentScrollPos >= 1200));
   setPrevScrollPos(currentScrollPos);
 }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <CTANav/>
      <div
        style={{ top: visible ? "" : "0" }}
        className={styles.navbarContainer}
      >
        {!curLoc.current?   (<div className={styles.logo} onClick={() => navigate('/')}>
              <img
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"
                alt="Company Logo"
              />
            </div>) : (<></>)
        }
        {!curLoc.current? <MegaMenu/>: <></> }
      </div> 
    </>
  );
};

export default Navbar;

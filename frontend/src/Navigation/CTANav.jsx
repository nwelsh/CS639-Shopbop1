import React from "react";
import styles from "./CTANav.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
// import { loadFromLocal } from '../Utils/LocalStorage';

const CTANav = () => {
  // const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cartCount = loadFromLocal('cartCount');
  // const [count, setCount] = React.useState(cartCount);

  // React.useState(() => {
  //   setCount(cartCount);
  // }, [count]);

  return (
    <div className={styles.ctaContainer}>
      <div className={styles.dropdowns}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1vw"
            height="1vw"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          US
        </p>
        <p>EN</p>
        <p>$USD</p>
      </div>
      <div className={styles.offer}>
        Free shipping and Free returns |{" "}
        <img
          src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/_global/images/topnav/amznprime_1-1.png"
          alt=""
        />
        eligible
      </div>
      <div className={styles.cta}>
        <p onClick={() => navigate("/signin")}>Sign In / Register</p>
        {/*{!token ? (*/}
        {/*  <p onClick={() => navigate("/signin")}>SignIn / Register</p>*/}
        {/*) : (*/}
        {/*  <p onClick={() => dispatch(logout())}>SignOut</p>*/}
        {/*)}*/}
        <p className={styles.wishlist}>
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/_global/images/topnav/rebrand-hearts_1-0.png"
            alt="Wishlist"
          />
        </p>
        <p className={styles.cart} onClick={() => navigate("/cart")}>
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/_global/images/topnav/bag_1-0.png"
            alt="Cart"
          />
        </p>
        {/*<p style={{ padding: 0 }}>{count}</p>*/}
      </div>
    </div>
  );
};

export default CTANav;

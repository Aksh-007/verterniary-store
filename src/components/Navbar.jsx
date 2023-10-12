// import logo from "../images/logo.png";
// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// const Navbar = () => {
//   const lastScrollTop = useRef(0);
//   const dispatch = useDispatch();
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   // use selector hook is used to keep the track on our slice
//   const { isAuthenticated } = useSelector((state) => state.root);
//   console.log(isAuthenticated);
//   useEffect(() => {
//     window.addEventListener(
//       "scroll",
//       () => {
//         var pageYOffset = window.scrollY;
//         if (pageYOffset > lastScrollTop.current) {
//           // downward scroll
//           setIsNavbarVisible(false);
//         } else if (pageYOffset < lastScrollTop.current) {
//           // upward scroll
//           setIsNavbarVisible(true);
//         } // else was horizontal scroll
//         lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
//       },
//       { passive: true }
//     );
//   }, []);
//   // function to dispatch logout functionality
//   const dispatchLogout = () => {
//     dispatch({ type: "logout" });
//   };
//   return (
//     <header>
//       <nav className={`nav-sticky ${isNavbarVisible ? "visible" : ""}`}>
//         <Link to="/" className="logo">
//           <img src={logo} alt="logo" />
//           <span>PETOLOGY</span>
//         </Link>
//         <div className="naviagtion-menu">
//           <Link to="/">HOME</Link>
//           <Link to="/services">SERVICE</Link>
//           <Link to="/customerdetails">CUSTOMER DETAILS</Link>
//           <Link to="/dashboard">DASHBOARD</Link>
//           {isAuthenticated ? (
//             // <button
//             //   className="logout-button"
//             //   type="submit"
//             //   onClick={dispatchLogout}
//             // >
//             //   LogOut
//             // </button>
//             <Link onClick={dispatchLogout}>LOGOUT</Link>
//           ) : (
//             <Link to="/login">LOGIN</Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../images/hamburger.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import logo from "../images/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.root);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let pageYOffset = window.scrollY;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  // dispatch ation
  const dispatchLogout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <nav className={`navbar nav-sticky ${isNavbarVisible ? "visible" : ""}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>PETELOGY</span>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/services">SERVICE</Link>
            </li>
            <li>
              <Link to="/customerdetails">CUSTOMER DETAILS</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              {isAuthenticated ? (
                // <button
                //   className="login-button"
                //   type="submit"
                //   onClick={dispatchLogout}
                // >
                //   LogOut
                // </button>
                <Link to="/login" onClick={dispatchLogout}>
                  LOGOUT
                </Link>
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
  // open sidebar function
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // close sidebar function
  const closeNavbar = () => {
    setShowNavbar(false);
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
              <Link onClick={closeNavbar} to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/services">
                SERVICE
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/customerdetails">
                CUSTOMER DETAILS
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/dashboard">
                DASHBOARD
              </Link>
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
                <Link
                  onClick={() => {
                    closeNavbar();
                    dispatchLogout();
                  }}
                  to="/login"
                >
                  LOGOUT
                </Link>
              ) : (
                <Link onClick={closeNavbar} to="/login">
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

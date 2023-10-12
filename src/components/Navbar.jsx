import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const lastScrollTop = useRef(0);
  const dispatch = useDispatch();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // use selector hook is used to keep the track on our slice
  const { isAuthenticated } = useSelector((state) => state.root);
  console.log(isAuthenticated);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var pageYOffset = window.scrollY;
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
  // function to dispatch logout functionality
  const dispatchLogout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <header>
      <nav className={`nav-sticky ${isNavbarVisible ? "visible" : ""}`}>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>PETOLOGY</span>
        </Link>
        <div className="naviagtion-menu">
          <Link to="/">HOME</Link>
          <Link to="/services">SERVICE</Link>
          <Link to="/customerdetails">CUSTOMER DETAILS</Link>
          <Link to="/dashboard">DASHBOARD</Link>
          {isAuthenticated ? (
            // <button
            //   className="logout-button"
            //   type="submit"
            //   onClick={dispatchLogout}
            // >
            //   LogOut
            // </button>
            <Link onClick={dispatchLogout}>LOGOUT</Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

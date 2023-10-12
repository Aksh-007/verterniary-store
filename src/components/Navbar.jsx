import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

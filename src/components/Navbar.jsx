import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="logo">
        <img
          src="/icon.png"
          alt="Sitio Logo"
          width="32"
          height="32"
          className="logo-img"
        />
      </Link>

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label="menu toggle"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          className="hamburger"
        >
          <path className="bar" d="M4 6h16M4 12h16M4 18h16" />
          <path className="cross" d="M18 6l-6 6-6-6M6 18l6-6 6 6" />
        </svg>
      </button>

      <div className={`nav-links ${open ? "open" : ""}`} id="nav-links">
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="shopping-cart" onClick={() => setOpen(false)}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

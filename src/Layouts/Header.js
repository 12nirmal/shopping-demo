import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalItem } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const { firstName } = user;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            className="logo"
            src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png"
            alt=""
          />
        </Link>

        <div className="nav-item">
          <Link to="/cart">
            <div className="icon">
              <i className="fa-solid fa-cart-plus"></i>
              <span className="count">{totalItem}</span>
            </div>
          </Link>

          <i className="fa-solid fa-house"></i>
          <Link to="/home">Home</Link>
          <i className="fa-solid fa-address-card"></i>
          <Link to="/abouts">About</Link>
          <i className="fa-solid fa-bag-shopping"></i>
          <Link to="/product">Products</Link>
          <i className="fa-solid fa-address-book"></i>
          <Link to="/contectus">Contact Us</Link>

          <i className="fa-solid fa-right-to-bracket"></i>
          {!isAuthenticated && <Link to="/login">Login</Link>}
          {isAuthenticated && (
            <p onClick={handleLogout}>Logout ({firstName}) </p>
          )}
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
};
export default Header;

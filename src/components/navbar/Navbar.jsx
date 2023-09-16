import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleBusiness = () => {
    if (currentUser) {
      navigate("/business");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            {/* <span className="text">ODOP</span> */}
            <img className="odopimg" src="/img/odop.png" alt="" />
            <img className="miiimg" src="/img/mii.png" alt="" />
            <img className="jkimg" src="/img/jk.png" alt="" />
          </Link>
          {/* <span className="dot">.</span>/ */}
        </div>
        <div className="links">
          {/* <span onClick={handleBusiness}>Fiverr Business</span> */}
          {/* <span>Explore</span> */}
          
          <span>English</span>
          {/* {!currentUser?.isSeller && <span>Become a Seller</span>} */}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link style={{display:"none"}} className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link style={{display:"none"}} className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link style={{display:"none"}} className="link" to="/orders">
                    Orders
                  </Link>
                  <Link style={{display:"none"}} className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          {/* <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr /> */}
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
             Walnuts
            </Link>
            <Link className="link menuLink" to="/">
             Apples
            </Link>
            <Link className="link menuLink" to="/">
             Dairy Products
            </Link>
            <Link className="link menuLink" to="/">
             Honey
            </Link>
            <Link className="link menuLink" to="/">
             Spices
             </Link>
            <Link className="link menuLink" to="/">
              Saffron
            </Link>
            <Link className="link menuLink" to="/">
             Olive products
            </Link>
            <Link className="link menuLink" to="/">
             Pickles
            </Link>
            <Link className="link menuLink" to="/">
             Bakery
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;

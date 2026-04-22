// import React from 'react'
// import { Link } from "react-router-dom"
// import { AppContext } from '../context/App_Context'
// import { useContext } from 'react'
 
// const Navbar = () => {
//   const {isAuthenticated, setisAuthenticated,logOut}=useContext(AppContext)
      
//   return (
//     <>
//     <div className="nav bg-dark p-2">
//         <Link to ={"/"} className="left" style={{ textDecoration:'none', 
//           color:'red' }}>
//         <h2>RecipoX</h2>
//          </Link>  
//         <div className="right">
//        <Link to={"/login"} className="btn btn-primary mx-2">Login</Link>
//        <Link to={"/Register"} className="btn btn-warning mx-2">Register</Link>
//        <Link to={"/add"} className="btn btn-info mx-2">Add</Link>
//         <Link to={"/profile"} className="btn btn-warning mx-2">Profile</Link>
//        <div className="btn btn-danger mx-2">LogOut</div>
//        <Link to={"/saved"} className="btn btn-light mx-2">Saved</Link>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Navbar
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const {isAuthenticated, setisAuthenticated,logOut} = useContext(AppContext)
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav px-3 px-md-5">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <h2 className="mb-0">RecipoX</h2>
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto align-items-lg-center gap-2 mt-3 mt-lg-0">
              {isAuthenticated && (
                <>
                  <Link to={"/add"} className="btn btn-outline-info border-0 text-light">
                    Add Recipe
                  </Link>
                  <Link to={"/profile"} className="btn btn-outline-warning border-0 text-light">
                    Profile
                  </Link>
                  <button className="btn btn-danger px-4" onClick={logOut}>LogOut</button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link to={"/login"} className="btn btn-primary px-4">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-outline-warning border-0 text-light">
                    Register
                  </Link>
                </>
              )}
              <Link to={"/saved"} className="btn btn-outline-light border-0">
                Saved
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
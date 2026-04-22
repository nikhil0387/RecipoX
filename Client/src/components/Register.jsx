import React, { useContext,useState } from "react";
import { AppContext } from "../context/App_Context";
 import { toast, Bounce } from 'react-toastify';
 import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const {register} = useContext(AppContext);
    const [name, setname] = useState("")
  const [gmail,setgmail] = useState("")
  const [password, setpassword] = useState("")

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, gmail, password);

    if (result.data.message === "User already exist") {
      toast.error(result.data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };
   
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
        <div className="auth-container glass-card p-4 p-md-5">
          <h2 className="text-center fw-bold mb-4">Create Account</h2>
          <form onSubmit={registerHandler}>
            <div className="mb-4">
              <label htmlFor="nameInput" className="form-label">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="emailInput" className="form-label">
                Email Address
              </label>
              <input
                value={gmail}
                onChange={(e) => setgmail(e.target.value)}
                required
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="••••••••"
              />
            </div>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary">
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

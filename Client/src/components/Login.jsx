import React, { useContext,useState } from "react";
import { AppContext } from "../context/App_Context";
 import { toast, Bounce } from 'react-toastify';
 import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AppContext);
const [gmail,setgmail] = useState("")
const [password, setpassword] = useState("")

const loginHandler = async (e)=>{
  e.preventDefault();
  const result = await login(gmail,password);
  
  if (!result.data.token) {
    toast.error(result.data.message || "Login failed");
    return;
  }
    toast.success(result.data.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  
  //  console.log(result.data);
  setTimeout(() => {
    navigate("/");
  }, 1500);
}
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="auth-container glass-card p-4 p-md-5">
          <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
          <form onSubmit={loginHandler}>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                value={gmail}
                onChange={(e) => setgmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary">
                Login to RecipoX
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

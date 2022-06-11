import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpService } from "../../services";
import { useAuth } from "../../contexts";
import { toast } from "react-toastify";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUpService(userData);
      const { encodedToken, foundUser } = data;
      authDispatch({
        type: "INIT_AUTH",
        payload: data.foundUser,
        isAuthenticated: true,
      });
      toast.success("Logged in Successful", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/");
      localStorage.setItem("token", encodedToken);
    } catch (error) {
      console.log(error);
      authDispatch({ type: "AUTH_FAILURE", payload: "Something went wrong!!" });
      toast.error("Something went wrong !", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="auth-container signup-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">SIGN UP</h2>
        <form onSubmit={signUpHandler}>
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            required
            className="user-input"
            type="text"
            name="firstName"
            placeholder="Enter your Fist Name"
            onChange={changeHandler}
          />
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            required
            className="user-input"
            type="text"
            name="lastName"
            placeholder="Enter your last Name"
            onChange={changeHandler}
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            className="user-input"
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={changeHandler}
          />

          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            required
            type="text"
            name="username"
            className="user-input"
            placeholder="Enter Username"
            onChange={changeHandler}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            required
            className="user-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={changeHandler}
          />

          <button
            className="btn-default  btn-primary login-signup"
            type="submit"
          >
            Create new account
          </button>

          <div className="create">
            <Link to="/login">Already have an account</Link>
          </div>
          <i className="nav-icon fa-regular fa-heart badge-icon"></i>
        </form>
      </div>
    </div>
  );
};

export { Signup };

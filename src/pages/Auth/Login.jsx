import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/";
import { useState } from "react";
import { loginService } from "../../services";
import { toast } from "react-toastify";

const Login = () => {
  const { authState, authDispatch } = useAuth();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      try {
        const { data } = await loginService(userData);
        const { encodedToken, foundUser } = data;
        localStorage.setItem("token", encodedToken);
        authDispatch({
          type: "INIT_AUTH",
          payload: data.foundUser,
          isAuthenticated: true,
        });
        toast.success(`Welcome ${foundUser.firstName} !!`, {
          position: "top-right",
          autoClose: 2000,
        });

        navigate("/");
      } catch (error) {
        toast.error("Something went wrong.Please try again!!", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  };

  const loginAsGuest = (e) => {
    e.preventDefault();
    setUserData({
      email: "manpreet@gmail.com",
      password: "Manpreet@123456",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">LOGIN</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            required
            id="email"
            className="user-input"
            type="email"
            value={userData.email}
            placeholder="Enter your Email"
            onChange={changeHandler}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            required
            id="password"
            className="user-input"
            type="password"
            value={userData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="btn-default  btn-primary login-signup"
          >
            Login
          </button>
          <button
            className="btn-default  login-signup"
            type="submit"
            onClick={loginAsGuest}
          >
            Fill test credentials
          </button>

          <div className="create">
            <Link to="/signup">Create new account 👉</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };

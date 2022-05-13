import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">SIGN UP</h2>
        <form>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            required
            id="email"
            className="user-input"
            type="email"
            placeholder="Enter your Email"
          />

          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            required
            id="username"
            className="user-input"
            placeholder="Enter Username"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            required
            id="password"
            className="user-input"
            type="password"
            placeholder="Enter Password"
          />

          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            required
            id="confirmPassword"
            className="user-input"
            type="password"
            placeholder="Confirm  Password"
          />

          <div>
            <input required type="checkbox" /> I accept all terms and conditions
          </div>
          <button className="btn-default  btn-primary login-signup">
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

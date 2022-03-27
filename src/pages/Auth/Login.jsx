import { Link} from "react-router-dom";

const Login=()=>{

    return(
        <div className="auth-container">
        <div className="auth-form">
            <h2 className="txt-header-color txt-center">LOGIN</h2>
            <form>

                <label htmlFor="email" className="label">Email address</label>
                <input id="email" className="user-input" type="email" placeholder="Enter your Email" />

                <label htmlFor="password" className="label">Password</label>
                <input id="password" className="user-input" type="password" placeholder="Enter Password"  />

                <div className="user-info flex-row space-between">
                    <div>
                        <input type="checkbox"/> Remember me
                    </div>
                    <Link to="/">Forgot password?</Link>
                </div>

                <button type="submit" className="btn-default  btn-primary login-signup">Login</button>

                <div className="create">
                    <Link to="/signup">
                        Create new account
                    </Link>
                </div>

            </form>
        </div>
    </div>
    )
}

export {Login};
import { Link } from 'react-router-dom';

export default function login(){

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return(
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Login To Your Account
                </h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={onSubmit} className="btn btn-block">Login</button>
                <p className="message">
                    Not Registered? <Link to='/register'>Create a new accout</Link>
                </p>
            </div>
        </div>
    )
}
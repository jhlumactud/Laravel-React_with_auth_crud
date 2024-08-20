import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function register(){
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(payload);
    }

    return(
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Create New Account 
                </h1>
                <input ref={nameRef} type="name" placeholder="Name" />
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={onSubmit} className="btn btn-block">Register</button>
                <p className="message">
                    Already Have An Account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}   
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogins from "./SocialLogins";

const Login = () => {
    const [message, setMessage] = useState('')
    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setMessage('logged in successfully')
            navigate(from, {replace: true});
            
        }).catch((error) => {
            setMessage(error.message)
        })
    }


    return (
        <form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" required className="input input-bordered" />
                                <Link to='/registration' className="label-text-alt link link-hover py-3">New to Site? Login!</Link>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <SocialLogins/>
                            <p className="font-bold text-center"><small>{message}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
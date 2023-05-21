import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import SocialLogins from "./SocialLogins";
import useTitle from "../hooks/useTitle";

const Registration = () => {

    useTitle('Registration')
    
    const [message, setMessage] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleRegistration = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL)

        createUser(email, password).then((result) => {
            const newUser = result.user;
            console.log(newUser);
            form.reset();
            setMessage('Signed Up successfully');
            updateUserProfile(result.user, name, email, photoURL);
            sendVerification(result.user)
        }).catch((error) => {
            setMessage(error.message)
        })
    }

    const updateUserProfile = (user, name, email, photoURL) => {
        updateProfile(user, {
            displayName: name,
            email: email,
            photoURL: photoURL
        })
    }

    const sendVerification = (user) => {
        sendEmailVerification(user).then(() => {
            setMessage('please verify your emaill');
            return;
        })
    }

    return (
        <form onSubmit={handleRegistration}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Name" name="name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Photo URL" name="photoURL" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Password" name="password" required className="input input-bordered" />
                                <Link to='/login' className="label-text-alt link link-hover py-3">Already have an account?</Link>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">sign up</button>
                            </div>
                            <SocialLogins/>
                        <p className="font-semibold text-center"><small>{message}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registration;
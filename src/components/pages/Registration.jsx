import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <form>
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
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registration;
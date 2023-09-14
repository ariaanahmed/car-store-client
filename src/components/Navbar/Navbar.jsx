import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => { }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="md:flex flex-row justify-center md:justify-between items-center py-3 border-b space-y-3 md:space-y-0 px-5">
            <div>
                <h3 className="text-center md:text-left font-bold text-xl">ToyzStore</h3>
            </div>
            <nav className="md:flex flex-row items-center gap-3 space-y-3 uppercase font-semibold text-center">
                <ul className="space-x-5 text-center">

                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-red-700' : ''}>Home</NavLink>

                    <NavLink to='/AllToys' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>All Toys</NavLink>

                    {
                        user && <NavLink to='/AddAToy' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>Add A Toy</NavLink>
                    }

                    {
                        user && <NavLink to='/MyToys' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>My Toys</NavLink>
                    }

                    <NavLink to='/Blogs' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>Blogs</NavLink>


                </ul>
                <div>
                    {
                        user ?
                            <div className="flex items-center justify-center">
                                <img title={user.displayName} style={{ width: '40px', height: '40px', borderRadius: '50%' }} className='w-25 img-fluid rouned-circle' src={user.photoURL} alt="profile-pic" />

                                <button className="btn btn-primary ml-5" onClick={handleLogOut} >Logout</button>
                            </div>
                            :
                            <NavLink to='/Login'>
                                <button className="btn btn-primary">Login</button>
                            </NavLink>

                    }
                </div>

            </nav>
            <div className="flex">
                <input type="text" placeholder="Search" name="search" id="search" className="border w-full py-2 px-3 rounded-md" />
                <button className="border bg-zinc-700 text-white py-2 px-3 rounded-md">Search</button>
            </div>
        </div>
    );
};

export default Navbar;
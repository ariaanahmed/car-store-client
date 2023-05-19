import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:flex flex-row justify-center md:justify-between items-center py-3 border-b space-y-3 md:space-y-0 px-5">
            <div>
                <h3 className="text-center md:text-left font-bold text-xl">Assignment11</h3>
            </div>
            <nav className="md:flex flex-row items-center gap-3 uppercase font-semibold">
                <ul className="space-x-5 text-center">

                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-red-700' : ''}>Home</NavLink>

                    <NavLink to='/AllToys' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>All Toys</NavLink>

                    <NavLink to='/AddAToy' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>Add A Toy</NavLink>

                    <NavLink to='/MyToys' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>My Toys</NavLink>

                    <NavLink to='/Blogs' className={({ isActive }) => isActive ? 'font-bold  text-red-700' : ''}>Blogs</NavLink>

                    <NavLink to='/Login'>
                        <button className="btn btn-primary">Login</button>
                    </NavLink>
                </ul>
                <div>
                    <img title="Profile Picture" className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="Profile-Pic" />
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
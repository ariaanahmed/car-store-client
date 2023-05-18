import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:flex flex-row justify-center md:justify-between items-center py-5 bg-slate-300 space-y-3 md:space-y-0 px-5">
            <div>
                <h3 className="text-center md:text-left font-bold text-xl">Assignment11</h3>
            </div>
            <nav className="md:flex flex-row items-center gap-3 uppercase font-semibold">
                <ul className="space-x-3 text-center">
                    <Link>Home</Link>
                    <Link>All Toys</Link>
                    <Link>Add A Toy</Link>
                    <Link>My Toys</Link>
                    <Link>Blogs</Link>
                </ul>
                <div>
                    <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="Profile-Pic" />
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
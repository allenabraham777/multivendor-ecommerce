import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky py-4 top-0 bg-gray-700 text-white">
      <div className="mx-auto container flex items-center justify-between">
        <Link to="/">
          <h1 id="brand" className="text-2xl font-bold">
            Admin Dashboard
          </h1>
        </Link>
        <nav className="flex space-x-8">
          <NavLink to="/signin">
            <span className="text-lg focus:text-gray-300 hover:text-gray-300">
              Sign In
            </span>
          </NavLink>
          <NavLink to="/signup">
            <span className="text-lg focus:text-gray-300 hover:text-gray-300">
              Sign Up
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

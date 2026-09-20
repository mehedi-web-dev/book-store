
import React from "react";

const Nav = () => {
  return (
    <nav className=" sticky top-0 z-50 border-b border-base-200 bg-base-100/80 px-4 shadow-sm backdrop-blur-md lg:px-8">
      
      <div className="navbar md:w-7xl md:mx-auto">
{/* Logo */}
      <div className="navbar-start">
        <h4 className=" px-2 text-xl font-bold tracking-tight">
          <span className="text-primary">Book</span>
          <span>Vibe</span>
        </h4>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
          <li>
            <a className="rounded-lg hover:bg-primary/10 hover:text-primary">
              Home
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-primary/10 hover:text-primary">
              Books
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-primary/10 hover:text-primary">
              Categories
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-primary/10 hover:text-primary">
              About
            </a>
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="navbar-end gap-2">
        <a className="btn btn-ghost hidden sm:flex">
          Sign in
        </a>

        <a className="btn btn-primary rounded-xl px-5">
          Sign up
        </a>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-1 mt-3 w-52 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Books</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li className="mt-2 border-t border-base-200 pt-2">
              <a>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </nav>
  );
};

export default Nav;

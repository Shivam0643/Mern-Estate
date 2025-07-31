import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-gradient-to-br from-pink-200 to-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Shivam</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-0 w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600 text-xl" />
        </form>
        <ul className="flex gap-6">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 text-lg font-semibold hover:text-slate-800 hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-slate-700 text-lg font-semibold hover:text-slate-800 hover:scale-105 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className="text-slate-700 text-lg font-semibold hover:text-slate-800 hover:scale-105 transition-all duration-300"
          >
            Sign in
          </Link>
        </ul>
      </div>
    </header>
  );
}

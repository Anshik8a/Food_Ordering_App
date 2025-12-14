import { LOGO_URL } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="w-full shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">

        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="logo"
          className="h-14 md:h-16 object-contain"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-lg font-medium text-gray-700">

            <li className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <span className={onlineStatus ? "text-green-600" : "text-red-500"}>
                {onlineStatus ? "Online 🟢" : "Offline 🔴"}
              </span>
            </li>

            <li className="hover:text-orange-500 transition">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-orange-500 transition">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:text-orange-500 transition">
              <Link to="/contact">Contact</Link>
            </li>

            <button
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
              className="px-5 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              {btnNameReact}
            </button>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">

            <li className="flex items-center gap-2">
              <span>Status:</span>
              <span className={onlineStatus ? "text-green-600" : "text-red-500"}>
                {onlineStatus ? "Online 🟢" : "Offline 🔴"}
              </span>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact">Contact</Link>
            </li>

            <button
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                setIsMenuOpen(false);
              }}
              className="mt-2 w-fit px-5 py-2 bg-orange-500 text-white rounded-lg shadow"
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul className="flex bg-gray-200 justify-end h-16">
        <li className="m-4 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="m-4 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

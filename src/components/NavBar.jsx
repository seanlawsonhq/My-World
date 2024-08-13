// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });
  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsMoonFill /> : <BsMoon />;
  return (
    <nav className="d-flex justify-content-between align-items-center p-5 shadow bg-elements custom-text-white">
      <Link
        to="/"
        className=" where text-decoration-none fw-semibold custom-text-white"
      >Where in the world</Link>
      
      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);

          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        className="d-flex align-item-center gap-2"
        style={{ cursor: "pointer" }}
      >
        {icon}
        <p className="m-0 light-dark">{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NavBar;

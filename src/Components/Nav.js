import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "nav active" : "nav"}>
      <nav>
        <Link to="/">B&H</Link>
      </nav>
    </div>
  );
}

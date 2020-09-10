import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <a className="header-nav-link" href="/">
          HOME
        </a>
        <a className="header-nav-link" href="/schedules-list">
          SCHEDULES LIST
        </a>
        <a className="header-nav-link" href="/schedule-now">
          SCHEDULE NOW
        </a>
      </nav>
    </div>
  );
}

export default Header;

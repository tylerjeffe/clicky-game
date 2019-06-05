import React from "react";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li>Logo Memory Game</li>
          <li className="status" />
          <li className="scoreboard" />
        </ul>
      </nav>
    </div>
  );
}

export default Header;

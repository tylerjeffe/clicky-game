import React from "react";

function Header(props) {
  return (
    <div>
      <nav class="navbar">
        <ul>
          <li>Logo Memory Game</li>
          <li class="status" />
          <li class="scoreboard" />
        </ul>
      </nav>
    </div>
  );
}

export default Header;

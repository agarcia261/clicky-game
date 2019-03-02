import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar">
            <div className="nav-items col-md-4">
                <h1><a class="nav-link" href="/">Clicky Game</a></h1>
            </div>
            <div className="nav-items col-md-4"><h1>Click an image to begin!</h1></div>
            <div className="nav-items col-md-4"><h1>Scores go here!</h1></div>
    </nav>
  );
}

export default Nav;

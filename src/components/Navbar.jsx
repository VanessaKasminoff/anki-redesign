import React from "react";

const Navbar = () => {
  return (
    <nav>
        <p>
          <a href="#">Anki</a>
        </p>
        <ul>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="https://docs.ankiweb.net/" target="_blank">
              Docs
            </a>
          </li>
        </ul>
        <div className="login-signup-container">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
    </nav>
  );
};

export default Navbar;

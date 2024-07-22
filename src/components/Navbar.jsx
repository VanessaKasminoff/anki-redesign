import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <p>
          <Link to='/'>Anki</Link>
        </p>
        <ul>
          <li>
            <Link to='/downloads'>Download</Link>
          </li>
          <li>
            <Link to='https://docs.ankiweb.net/' target="_blank" rel="noopener noreferrer">Docs</Link>
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

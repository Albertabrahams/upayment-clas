import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const currentUser = { displayName: "felix franko" };
  const currentUser = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg m-4 p-2 rounded-3" >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-black">
            <h4><strong><em>UPayments Store</em></strong></h4>
          </Link>
          <div className="d-flex text-black align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ) : (
              <button
                className="ms-2 btn btn-outline-dark"
                onClick={() => navigate("/login")}
              >
                <strong><em>Login</em></strong>
              </button>
            )}

            {currentUser ? (
              <button className="ms-2 btn btn-outline-dark">Logout</button>
            ) : (
              <button
                className="ms-2 btn btn-outline-dark"
                onClick={() => navigate("/register")}
              >
                <strong><em>Register</em></strong>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
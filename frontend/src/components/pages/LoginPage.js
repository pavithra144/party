import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

const LoginPage = (props) => {
  const { errors, loginUser, userAuth, setError, clearError } = useContext(
    AuthContext
  );
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearError();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    clearError();
  };
  return (
    <div className="register">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Sign In"
          className="btn"
          onChange={handleChange}
        />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()}>X</span>
          </button>
        )}
        <p>
          {" "}
          Have no Account? Create new account{" "}
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

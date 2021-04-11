import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

const RegisterPage = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { userAuth, errors, registerUser, setError, clearError } = useContext(
    AuthContext
  );
  const { name, email, password, password2 } = user;

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
    if (password !== password2) {
      setError({ msg: "password didnt match" });
    } else {
      // setUser(user);
      registerUser({ name, email, password });
      clearError();
    }
  };
  return (
    <div className="register">
      <h1>Sign up</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={password2}
        />
        <input type="submit" value="Sign up" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()} >X</span>
          </button>
        )}
        <p>
          {" "}
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

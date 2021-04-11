import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  FAIL_REGISTER,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  SET_USER,
  AUTH_ERROR,
} from "../types";
import setToken from "../../utils/SetToken";

const AuthState = (props) => {
  const initialState = {
    user: null,
    userAuth: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //get user name
  const getUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    try {
      const res = await axios.get("/auth");
      dispatch({ type: SET_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
  //register
  const registerUser = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      //response
      const res = await axios.post("/register", userData, config);
      // console.log(res.data); gives us token
      dispatch({ type: SUCCESS_REGISTER, payload: res.data });
    } catch (error) {
      dispatch({ type: FAIL_REGISTER, payload: error.response.data });
    }
  };

  //login
  const loginUser = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      //response
      const res = await axios.post("/auth", userData, config);
      // console.log(res.data);   gives us token
      dispatch({ type: SUCCESS_LOGIN, payload: res.data });
    } catch (error) {
      dispatch({ type: FAIL_LOGIN, payload: error.response.data });
      console.log(error.response);
    }
  };
  //log out
  const logout = () => {
    dispatch({ type: LOG_OUT });
  };
  const setError = (err) => {
    dispatch({ type: SET_ERROR, payload: err });
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        user: state.user,
        getUser,
        registerUser,
        loginUser,
        setError,
        clearError,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;

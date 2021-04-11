import {
  AUTH_ERROR,
  CLEAR_ERROR,
  FAIL_LOGIN,
  FAIL_REGISTER,
  LOG_OUT,
  SET_ERROR,
  SET_USER,
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userAuth: true,
        user: action.payload,
        errors: null,
      };

    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return { ...state, userAuth: true, errors: null };

    case FAIL_REGISTER:
    case FAIL_LOGIN:
    case LOG_OUT:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return { ...state, userAuth: null, errors: action.payload };

    case SET_ERROR:
      return { ...state, errors: action.payload };

    case CLEAR_ERROR:
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default AuthReducer;

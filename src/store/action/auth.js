import axios from "axios";
import * as actionType from "./actionType";
export const emailRegister = (value) => {
  return {
    type: actionType.AUTH_EMAIL_REGISTER,
    value: value,
  };
};
export const passRegister = (value) => {
  return {
    type: actionType.AUTH_PASS_REGISTER,
    value: value,
  };
};
export const authSuccess = (localId, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    localId: localId,
    userId: userId,
  };
};
export const authFailed = (error) => {
  return {
    type: actionType.AUTH_FAILED,
    error: error,
  };
};
export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};
export const logout = () => {
  return {
    type: actionType.LOGOUT,
  };
};
export const expirationToken = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch(lcFalse());
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const register = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authentication = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-l-INIaxfdL3bBm3OWu3fr7V6ic013fs",
        authentication
      )
      .then((response) => {
        localStorage.setItem("token", response.data.idToken);
        dispatch(lcTrue());
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.localId
          ) //make tokenid , localid and loading changed to  false
        );
        dispatch(expirationToken(response.data.expiresIn)); //expire token after particular time
      })
      .catch((error) => dispatch(authFailed(error)));
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authentication = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-l-INIaxfdL3bBm3OWu3fr7V6ic013fs",
        authentication
      )
      .then((response) => {
        localStorage.setItem("token", response.data.idToken);
        dispatch(lcTrue());
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.localId
          ) //make tokenid , localid and loading changed to  false
        );
        dispatch(expirationToken(response.data.expiresIn)); //expire token after particular time
      })
      .catch((error) => dispatch(authFailed(error)));
  };
};
export const lcTrue = () => {
  return {
    type: actionType.LC_TRUE,
  };
};
export const lcFalse = () => {
  return {
    type: actionType.LC_FALSE,
  };
};
export const checkState = () => {
  return (dispatch) => {
    const lc = localStorage.getItem("token");
    if (lc) {
      dispatch(lcTrue());
    } else {
      dispatch(lcFalse());
    }
  };
};

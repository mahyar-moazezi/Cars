import * as actionType from "./actionType";
import axios from "../../axios";
export const companyHandler = (company) => {
  return {
    type: actionType.COMPANY,
    company: company,
  };
};
export const modelHandler = (model) => {
  return {
    type: actionType.MODEL,
    model: model,
  };
};
export const yearHandler = (year) => {
  return {
    type: actionType.YEAR,
    year: year,
  };
};
export const optionHandler = (option) => {
  return {
    type: actionType.OPTION,
    option: option,
  };
};
export const registerSuccess = () => {
  return {
    type: actionType.REGISTER_SUCCESS,
  };
};
export const registerFailed = () => {
  return {
    type: actionType.REGISTER_FAILED,
  };
};
export const register = () => {
  return {
    type: actionType.REGISTER,
  };
};
export const registerHandler = (data) => {
  return (dispatch) => {
    dispatch(register()); //Loading=true and Spinner
    axios
      .post("/data.json", data)
      .then((response) => dispatch(registerSuccess()))
      .catch((err) => dispatch(registerFailed()));
  };
};
export const getDataSuccess = (data) => {
  return {
    type: actionType.GET_DATA_SUCCESS,
    data: data,
  };
};
export const getData = () => {
  return (dispatch) => {
    dispatch(register()); //Loading =true and Spinner
    axios
      .get("/data.json")
      .then((response) =>
        dispatch(getDataSuccess(response.data))
      )
      .catch((err) => dispatch(registerFailed())); //make error true
  };
};
export const delHandler = (carIndex) => {
  return {
    type: actionType.DELETE_CAR,
    carIndex: carIndex
  };
};

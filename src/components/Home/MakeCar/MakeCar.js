import React, { Fragment } from "react";
import { connect } from "react-redux";
import CardPhoto from "../../../assets/Images/card-photo.jpg";
import Classes from "./MakeCar.module.css";
import * as actionIndex from "../../../store/action/index";
const MakeCar = (props) => {
  const companyHandler = (event) => {
    const value = event.target.value;
    props.onCompany(value);
  };
  const modelHandler = (event) => {
    const value = event.target.value;
    props.onModel(value);
  };
  const yearHandler = (event) => {
    const value = event.target.value;
    props.onYear(value);
  };
  const optionHandler = (event) => {
    const value = event.target.value;
    props.onOption(value);
  };
  const registerForm = (e) => {
    e.preventDefault();
    const data = {
      company: props.company,
      model: props.model,
      year: props.year,
      option: props.option,
    };
    props.onRegister(data);
  };
  return (
    <Fragment>
      <div className={Classes.Card}>
        <img
          src={CardPhoto}
          className={Classes.Image}
          alt="card-photo"
        />

        <form className={Classes.Form} onSubmit={registerForm}>
          <label>
            Company:{" "}
            <input
              type="text"
              name="company"
              onChange={companyHandler}
            />
          </label>
          <label>
            Model:{" "}
            <input
              type="text"
              name="model"
              onChange={modelHandler}
            />
          </label>
          <label>
            Year:{" "}
            <input
              type="number"
              name="year"
              onChange={yearHandler}
            />
          </label>
          <label>
            Options:{" "}
            <select name="option" onChange={optionHandler}>
              <option>Full</option>
              <option>Low</option>
            </select>
          </label>
          <button disabled={!props.auth}>REGISTER</button>
        </form>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    company: state.carReducer.company,
    model: state.carReducer.model,
    year: state.carReducer.year,
    option: state.carReducer.option,
    auth: state.authReducer.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCompany: (company) =>
      dispatch(actionIndex.companyHandler(company)),
    onModel: (model) =>
      dispatch(actionIndex.modelHandler(model)),
    onYear: (year) => dispatch(actionIndex.yearHandler(year)),
    onOption: (option) =>
      dispatch(actionIndex.optionHandler(option)),
    onRegister: (data) =>
      dispatch(actionIndex.registerHandler(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeCar);

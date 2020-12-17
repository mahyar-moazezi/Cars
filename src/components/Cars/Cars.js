import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Car from "./Car/Car";
import Classes from "./Cars.module.css";
import * as actionIndex from "../../store/action/index";
const Cars = (props) => {
  useEffect(() => {
    props.onGetData();
    props.onCheckState();
  }, []);
  const dataArray = Object.values(props.data);
  const deleteHandler = (car) => {
    const index = dataArray.indexOf(car);
    dataArray.splice(index, 1);
    props.onDelHandler(dataArray);
  };

  return (
    <Fragment>
      {props.auth && (
        <div className={Classes.Cars}>
          {dataArray.map((car) => (
            <Car
              company={car.company}
              model={car.model}
              option={car.option}
              year={car.year}
              key={car.model}
              deleteHandler={() => deleteHandler(car)}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.carReducer.data,
    auth: state.authReducer.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetData: () => dispatch(actionIndex.getData()),
    onDelHandler: (carIndex) =>
      dispatch(actionIndex.delHandler(carIndex)),
    onCheckState: () => dispatch(actionIndex.checkState()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);

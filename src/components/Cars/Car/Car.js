import React from "react";
import Classes from "./Car.module.css";
const Car = (props) => {
  return (
    <div className={Classes.Car} onClick={props.deleteHandler}>
      <h4>
        You choose {props.company} {props.model} {props.year}{" "}
        {props.option} Option
      </h4>
      <h5>*Congratulations it was an interesting choice*</h5>
    </div>
  );
};

export default Car;

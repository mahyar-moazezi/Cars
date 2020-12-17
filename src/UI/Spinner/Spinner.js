import React, { Fragment } from "react";
import Classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <Fragment>
      <div className={Classes.loader}>Loading...</div>
    </Fragment>
  );
};

export default Spinner;

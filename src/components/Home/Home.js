import React, { useEffect } from "react";
import MakeCar from "./MakeCar/MakeCar";
import Classes from "./Home.module.css";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import * as actionIndex from "../../store/action/index";
const Home = (props) => {
  useEffect(() => {
    props.onCheckState();
  }, []);
  let spinner = <Spinner />;
  if (!props.loading) {
    spinner = <MakeCar />;
  }
  let error = "";
  if (props.error) {
    error = (
      <h1 className={Classes.Error}>ERROR! PLEASE TRY AGAIN</h1>
    );
  }

  return (
    <div className={Classes.Home}>
      <h3 style={{ color: "var(--toolbar)" }}>
        *|Signup and see all features|*
      </h3>
      <h1>Dream Cars</h1>
      <p>
        A dream car is a car which satisfies wish fulfillment.
        The superlative "dream car" may be associated with:
        Supercar, a very fast performance car. Luxury car, a very
        expensive car with luxurious fittings.
      </p>
      {error}
      {spinner}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.carReducer.loading,
    error: state.carReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCheckState: () => dispatch(actionIndex.checkState()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

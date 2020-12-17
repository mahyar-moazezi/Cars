import * as actionType from "../action/actionType";
const initialState = {
  data: {},
  company: "",
  model: "",
  year: "",
  option: "Full",
  loading: false,
  error: false,
};
const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.COMPANY:
      return {
        ...state,
        company: action.company,
      };
    case actionType.MODEL:
      return {
        ...state,
        model: action.model,
      };
    case actionType.YEAR:
      return {
        ...state,
        year: action.year,
      };
    case actionType.OPTION:
      return {
        ...state,
        option: action.option,
      };
    case actionType.REGISTER_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case actionType.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case actionType.DELETE_CAR:
      return {
        ...state,
        data: action.carIndex,
      };

    default:
      return state;
  }
};
export default CarReducer;

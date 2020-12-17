import * as actionType from "../action/actionType";
const initialState = {
  email: null,
  password: null,
  loading: false,
  localId: null,
  userId: null,
  error: false,
  auth: false,
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_EMAIL_REGISTER:
      return {
        ...state,
        email: action.value,
      };
    case actionType.AUTH_PASS_REGISTER:
      return {
        ...state,
        password: action.value,
      };
    case actionType.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        localId: action.localId,
        userId: action.userId,
        error: null,
      };
    case actionType.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        localId: null,
        userId: null,
      };
    case actionType.LC_TRUE:
      return {
        ...state,
        auth: true,
      };
    case actionType.LC_FALSE:
      return {
        ...state,
        auth: false,
      };

    default:
      return state;
  }
};
export default Auth;

import {
  GET_REGISTER_ERROR,
  GET_REGISTER_LOADING,
  GET_REGISTER_SUCCESS,
} from "./action";

const initState = {
  loading: false,
  userSuccess: null,
  error: null,
};

export const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userSuccess: action.payload,
      };
    case GET_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        userSuccess: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

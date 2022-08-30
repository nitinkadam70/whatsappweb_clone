import { GET_AUTH_ERROR, GET_AUTH_LOADING, GET_AUTH_SUCCESS } from "./action";

const initState = {
  loading: false,
  auth: null,
  error: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case GET_AUTH_ERROR:
      return {
        ...state,
        loading: false,
        auth: null,
        error: true,
      };
    default:
      return state;
  }
};

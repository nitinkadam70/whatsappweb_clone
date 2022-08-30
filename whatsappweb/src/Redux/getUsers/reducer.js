import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "./action";

const initState = {
  loading: false,
  users: [],
  error: false,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

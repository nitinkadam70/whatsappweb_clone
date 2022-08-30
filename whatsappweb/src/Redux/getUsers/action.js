import axios from "axios";
import { allUsersRoutes } from "../../utils/ApiRoutes";

//Actions Types
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

//Actions
const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const getUsersError = (error) => ({
  type: GET_USERS_REQUEST,
  payload: error,
});

//Fetching APIs and getting USers Data
export const getUsersData = () => (dispatch) => {
  const userid = localStorage.getItem("userid");
  dispatch(getUsersRequest());
  axios({
    method: "GET",
    url: `${allUsersRoutes}/${userid}`,
  })
    .then((res) => {
      dispatch(getUsersSuccess(res.data));
    })
    .catch((err) => dispatch(getUsersError(err)));
};

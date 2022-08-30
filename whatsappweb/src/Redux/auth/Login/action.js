import axios from "axios";
import { loginRoute } from "../../../utils/ApiRoutes";

export const GET_AUTH_LOADING = "GET_AUTH_LOADING";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR";

//login

const getAuthLoading = () => ({
  type: GET_AUTH_LOADING,
});
const getAuthSuccess = (payload) => ({
  type: GET_AUTH_SUCCESS,
  payload,
});
const getAuthError = () => ({
  type: GET_AUTH_ERROR,
});

//post
export const getAuthToken = (payload) => (dispatch) => {
  dispatch(getAuthLoading());
  axios({
    url: loginRoute,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: payload,
  })
    .then((res) => {
      if (res.data.status === true) {
        localStorage.setItem("userid", res.data.user._id);
        dispatch(getAuthSuccess(res.data.user));
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      } else if (res.data.status === false) {
        dispatch(getAuthError());
      }
    })
    .catch((error) => dispatch(getAuthError()));
};

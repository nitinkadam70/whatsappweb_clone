import axios from "axios";
import { registerRoute } from "../../../utils/ApiRoutes";

export const GET_REGISTER_LOADING = "GET_AUTH_LOADING";
export const GET_REGISTER_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_REGISTER_ERROR = "GET_AUTH_ERROR";

//Register

const getRegisterLoading = () => ({
  type: GET_REGISTER_LOADING,
});
const getRegisterSuccess = (payload) => ({
  type: GET_REGISTER_SUCCESS,
  payload,
});
const getRegisterError = (err) => ({
  type: GET_REGISTER_ERROR,
  err,
});

//post
export const getRegisterToken = (payload) => (dispatch) => {
  dispatch(getRegisterLoading());
  axios({
    url: registerRoute,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: payload,
  })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(getRegisterSuccess(res.data.user));
      } else if (res.data.status === false) {
        dispatch(getRegisterError(res.data.msg));
      }
    })
    .catch((error) => dispatch(getRegisterError()));
};

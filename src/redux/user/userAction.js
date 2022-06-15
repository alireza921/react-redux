import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCES,
} from "./userTypes";

export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

export function fetchUseFailur(error) {
  return {
    type: FETCH_USER_FAILURE,
    paylaod : error
  };
}

export function fetchUserSucces(users) {
  return {
    type: FETCH_USER_SUCCES,
    payload : users
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSucces(users));
      })

      .catch((err) => dispatch(fetchUseFailur(err.message)));
  };
}

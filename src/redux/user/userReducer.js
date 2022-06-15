import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCES,
} from "./userTypes";

const initialState = {
  loading: false,
  error: "",
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        error: action.paylaod,
      };

    case FETCH_USER_SUCCES:
      return {
        loading: false,
        error: "",
        user: action.payload
      };
      default : return state
  }
};

export default userReducer ;
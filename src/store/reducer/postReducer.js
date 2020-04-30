import {
  USER_POST,
  USER_POST_SUCCESS,
  USER_POST_FAILED,
} from "../action/actionType";

const initistate = {
  isLogged: false,
  post: [],
  errorMessage: "",
};

const postReducer = (state = initistate,action) => {
  switch (action.type) {
    case USER_POST: {
      return {
        ...state,
        isLogged: true,
      };
    }
    case USER_POST_SUCCESS: {
      return {
        ...state,
        isLogged:false,
        post: action.payload,
      };
    }
    case USER_POST_FAILED: {
      return {
          ...state,
        errorMessage: "error, data not recieve",
      };
    }

    default:
      return state;
  }
};

export default postReducer;

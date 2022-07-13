import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  sendMessage: "",
  myMessages: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SENDMESSAGE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SENDMESSAGE_SUCCESS:
      return {
        ...state,
        sendMessage: action.payload.sendMessage,
        loading: false,
      };
    case authActionTypes.SENDMESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.MYMESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.MYMESSAGES_SUCCESS:
      return {
        ...state,
        myMessages: action.payload.myMessages,
        loading: false,
      };
    case authActionTypes.MYMESSAGES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;

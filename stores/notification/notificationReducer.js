import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  joinRoom: "",
  viewedNotification: "",
  notifications: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.GETNOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETNOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: action.payload.notifications,
        loading: false,
      };
    case authActionTypes.GETNOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.VIEWNOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.VIEWNOTIFICATION_SUCCESS:
      return {
        ...state,
        viewedNotification: action.payload.viewedNotification,
        loading: false,
      };
    case authActionTypes.VIEWNOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.JOINROOM_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.JOINROOM_SUCCESS:
      return {
        ...state,
        joinRoom: action.payload.joinRoom,
        loading: false,
      };
    case authActionTypes.JOINROOM_FAILURE:
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

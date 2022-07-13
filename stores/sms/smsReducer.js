import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  queuedSms: "",
  sendSms: "",
  queueSms: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.QUEUESMS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.QUEUESMS_SUCCESS:
      return {
        ...state,
        queueSms: action.payload.queueSms,
        loading: false,
      };
    case authActionTypes.QUEUESMS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SENDSMS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SENDSMS_SUCCESS:
      return {
        ...state,
        sendSms: action.payload.sendSms,
        loading: false,
      };
    case authActionTypes.SENDSMS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SENDQUEUEDSMS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SENDQUEUEDSMS_SUCCESS:
      return {
        ...state,
        queuedSms: action.payload.queuedSms,
        loading: false,
      };
    case authActionTypes.SENDQUEUEDSMS_FAILURE:
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

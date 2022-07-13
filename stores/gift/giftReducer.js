import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  buyGift: "",
  sendGift: "",
  sellGift: "",
  allGifts: "",
  allMyGift: "",
  myGift: "",
  myGiftToken: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.BUYGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.BUYGIFT_SUCCESS:
      return {
        ...state,
        buyGift: action.payload.buyGift,
        loading: false,
      };
    case authActionTypes.BUYGIFT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.GETALLGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETALLGIFT_SUCCESS:
      return {
        ...state,
        allGifts: action.payload.allGifts,
        loading: false,
      };
    case authActionTypes.GETALLGIFT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SELLGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SELLGIFT_SUCCESS:
      return {
        ...state,
        sellGift: action.payload.sellGift,
        loading: false,
      };
    case authActionTypes.SELLGIFT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETALLMYGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETALLMYGIFT_SUCCESS:
      return {
        ...state,
        allMyGift: action.payload.allMyGift,
        loading: false,
      };
    case authActionTypes.GETALLMYGIFT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETMYGIFTTOKEN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETMYGIFTTOKEN_SUCCESS:
      return {
        ...state,
        myGiftToken: action.payload.myGiftToken,
        loading: false,
      };
    case authActionTypes.GETMYGIFTTOKEN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.SENDGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SENDGIFT_SUCCESS:
      return {
        ...state,
        sendGift: action.payload.sendGift,
        loading: false,
      };
    case authActionTypes.SENDGIFT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETMYGIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETMYGIFT_SUCCESS:
      return {
        ...state,
        myGift: action.payload.myGift,
        loading: false,
      };
    case authActionTypes.GETMYGIFT_FAILURE:
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

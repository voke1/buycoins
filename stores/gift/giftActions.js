import axios from "axios";
import {
  ////Gift
  BUYGIFT,
  GETALLGIFT,
  SELLGIFT,
  GETALLMYGIFT,
  GETMYGIFTTOKEN,
  SENDGIFT,
  GETMYGIFT,
} from "../../constants/url";
import utils from "../../utils/Utils.js";

const {
  apiPost,
  apiGet,
  clearUserData,
  setUserData,
  // signUpBegin,
  // loginBegin,
  // loginFailure,
  // loginSuccess,
  // getUserData,
  // signUpFailure,
  // signUpSuccess,
  getAllMyGiftBegin,
  getAllMyGiftFailure,
  getAllMyGiftSuccess,
  getMyGiftTokenBegin,
  getMyGiftTokenFailure,
  getMyGiftTokenSuccess,
  getAllGiftBegin,
  getAllGiftSuccess,
  getAllGiftFailure,
  sendGiftBegin,
  sendGiftFailure,
  sendGiftSuccess,
} = utils;

export function buyGift(data) {
  return async (dispatch) => {
    dispatch(buyGiftBegin());
    try {
      const result = await apiPost(BUYGIFT, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(buyGiftSuccess(result.data));
      if (!result.success) dispatch(buyGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(buyGiftFailure(err.response.data));
      return err.response;
    }
  };
}

export function getAllGift(data) {
  return async (dispatch) => {
    dispatch(getAllGiftBegin());
    try {
      const result = await apiGet(GETALLGIFT, data);
      console.log("ALL GIFT: ", result);
      if (result.success) dispatch(getAllGiftSuccess(result.data));
      if (!result.success) dispatch(getAllGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getAllGiftFailure(err.response.data));
      return err.response;
    }
  };
}

export function sellGift(data) {
  return async (dispatch) => {
    dispatch(sellGiftBegin());
    try {
      const result = await apiPost(SELLGIFT, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(sellGiftSuccess(result.data));
      if (!result.success) dispatch(sellGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(sellGiftFailure(err.response.data));
      return err.response;
    }
  };
}

export function getAllMyGift(data) {
  return async (dispatch) => {
    dispatch(getAllMyGiftBegin());
    try {
      const result = await apiGet(GETALLGIFT, data);
      console.log("ALL MY GIFT: ", result);
      if (result.success) dispatch(getAllMyGiftSuccess(result.data));
      if (!result.success) dispatch(getAllMyGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getAllMyGiftFailure(err.response.data));
      return err.response;
    }
  };
}

export function getMyGiftToken(data) {
  return async (dispatch) => {
    dispatch(getMyGiftTokenBegin());
    try {
      const result = await apiGet(GETMYGIFTTOKEN, data);
      console.log("my gift token: ", result);
      if (result.responseMessage == "Success") dispatch(getMyGiftTokenSuccess(result.userGiftToken));
      if (!result) dispatch(getMyGiftTokenFailure(result));
      return result;
    } catch (err) {
      dispatch(getMyGiftTokenFailure(err.response.data));
      return err.response;
    }
  };
}

export function sendGift(data) {
  return async (dispatch) => {
    dispatch(sendGiftBegin());
    try {
      const result = await apiPost(SENDGIFT, data);
      console.log("SEND GIFT: ", result);
      if (result.success) dispatch(sendGiftSuccess(result.data));
      if (!result.success) dispatch(sendGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(sendGiftFailure(err.response.data));
      return err.response;
    }
  };
}

export function getMyGift(data) {
  return async (dispatch) => {
    dispatch(getMyGiftBegin());
    try {
      const result = await apiPost(GETMYGIFT, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getMyGiftSuccess(result.data));
      if (!result.success) dispatch(getMyGiftFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getMyGiftFailure(err.response.data));
      return err.response;
    }
  };
}

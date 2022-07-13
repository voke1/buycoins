import axios from "axios";
import {
  ////SMS
  QUEUESMS,
  SENDSMS,
  SENDQUEUEDSMS,
} from "../../constants/url";
import { utils } from "../../utils";

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
} = utils;

export function queueSms(data) {
  return async (dispatch) => {
    dispatch(queueSmsBegin());
    try {
      const result = await apiPost(QUEUESMS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(queueSmsSuccess(result.data));
      if (!result.success) dispatch(queueSmsFailure(result.data));
      return result;
    } catch (err) {
      dispatch(queueSmsFailure(err.response.data));
      return err.response;
    }
  };
}

export function sendSms(data) {
  return async (dispatch) => {
    dispatch(sendSmsBegin());
    try {
      const result = await apiPost(SENDSMS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(sendSmsSuccess(result.data));
      if (!result.success) dispatch(sendSmsFailure(result.data));
      return result;
    } catch (err) {
      dispatch(sendSmsFailure(err.response.data));
      return err.response;
    }
  };
}

export function sendQueuedSms(data) {
  return async (dispatch) => {
    dispatch(sendQueuedSmsBegin());
    try {
      const result = await apiPost(SENDQUEUEDSMS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(sendQueuedSmsSuccess(result.data));
      if (!result.success) dispatch(sendQueuedSmsFailure(result.data));
      return result;
    } catch (err) {
      dispatch(sendQueuedSmsFailure(err.response.data));
      return err.response;
    }
  };
}

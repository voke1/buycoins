import axios from "axios";
import {
  ////Message
  SENDMESSAGE,
  MYMESSAGES,
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

export function sendMessage(data) {
  return async (dispatch) => {
    dispatch(sendMessageBegin());
    try {
      const result = await apiPost(SENDMESSAGE, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(sendMessageSuccess(result.data));
      if (!result.success) dispatch(sendMessageFailure(result.data));
      return result;
    } catch (err) {
      dispatch(sendMessageFailure(err.response.data));
      return err.response;
    }
  };
}

export function myMessages(data) {
  return async (dispatch) => {
    dispatch(myMessagesBegin());
    try {
      const result = await apiGet(MYMESSAGES, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(myMessagesSuccess(result.data));
      if (!result.success) dispatch(myMessagesFailure(result.data));
      return result;
    } catch (err) {
      dispatch(myMessagesFailure(err.response.data));
      return err.response;
    }
  };
}

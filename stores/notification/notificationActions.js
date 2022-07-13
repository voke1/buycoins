import axios from "axios";
import {
  ////Notification
  GETNOTIFICATION,
  VIEWNOTIFICATION,
  JOINROOM,
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
  getNotificationBegin,
  getNotificationSuccess,
  getNotificationFailure,
} = utils;

export function viewNotification(data) {
  return async (dispatch) => {
    dispatch(viewNotificationBegin());
    try {
      const result = await apiPost(VIEWNOTIFICATION, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(viewNotificationSuccess(result.data));
      if (!result.success) dispatch(viewNotificationFailure(result.data));
      return result;
    } catch (err) {
      dispatch(viewNotificationFailure(err.response.data));
      return err.response;
    }
  };
}

export function getNotification() {
  return async (dispatch) => {
    dispatch(getNotificationBegin());
    try {
      const result = await apiPost(GETNOTIFICATION,);
      console.log("NOTIFICATION: ", result);
      if (result) {
        dispatch(getNotificationSuccess(result));
        return result;
      } else {
        dispatch(getNotificationFailure(result));
        return result;
      }
    } catch (err) {
      dispatch(getNotificationFailure(err.response.data));
      return err;
    }
  };
}

export function joinRoom(data) {
  return async (dispatch) => {
    dispatch(joinRoomBegin());
    try {
      const result = await apiPost(JOINROOM, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(joinRoomSuccess(result.data));
      if (!result.success) dispatch(joinRoomFailure(result.data));
      return result;
    } catch (err) {
      dispatch(joinRoomFailure(err.response.data));
      return err.response;
    }
  };
}

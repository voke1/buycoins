import axios from "axios";
import {
  ////Dating
  LIKE,
  FEEDS,
  SENDMESSAGE_DATING,
  GETMYCHATTERS,
  MYMESSAGES_DATING,
  MATCHPROFILE,
  SWIPE,
  DISLIKE,
  SEARCHUSER,
  GETMYLIKES,
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

  likeBegin,
  likeSuccess,
  likeFailure,
  dislikeBegin,
  dislikeSuccess,
  dislikeFailure,
  
} = utils;

export function like(data) {
  return async (dispatch) => {
    dispatch(likeBegin());
    try {
      const result = await apiPost(LIKE, data);
      console.log("RESULT: ", result);
      if (result) dispatch(likeSuccess(result.data));
      if (!result) dispatch(likeFailure(result.data));
      return result;
    } catch (err) {
      dispatch(likeFailure(err.response.data));
      return err.response;
    }
  };
}

export function feeds(data) {
  return async (dispatch) => {
    dispatch(feedsBegin());
    try {
      const result = await apiPost(FEEDS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(feedsSuccess(result.data));
      if (!result.success) dispatch(feedsFailure(result.data));
      return result;
    } catch (err) {
      dispatch(feedsFailure(err.response.data));
      return err.response;
    }
  };
}

export function sendMessage(data) {
  return async (dispatch) => {
    dispatch(sendMessageBegin());
    try {
      const result = await apiPost(SENDMESSAGE_DATING, data);
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

export function getMyChatters(data) {
  return async (dispatch) => {
    dispatch(getMyChattersBegin());
    try {
      const result = await apiPost(GETMYCHATTERS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getMyChattersSuccess(result.data));
      if (!result.success) dispatch(getMyChattersFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getMyChattersFailure(err.response.data));
      return err.response;
    }
  };
}

export function myMessages(data) {
  return async (dispatch) => {
    dispatch(myMessagesBegin());
    try {
      const result = await apiGet(MYMESSAGES_DATING, data);
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

export function matchProfile(data) {
  return async (dispatch) => {
    dispatch(matchProfileBegin());
    try {
      const result = await apiPost(MATCHPROFILE, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(matchProfileSuccess(result.data));
      if (!result.success) dispatch(matchProfileFailure(result.data));
      return result;
    } catch (err) {
      dispatch(matchProfileFailure(err.response.data));
      return err.response;
    }
  };
}

export function swipe(data) {
  return async (dispatch) => {
    dispatch(swipeBegin());
    try {
      const result = await apiPost(SWIPE, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(swipeSuccess(result.data));
      if (!result.success) dispatch(swipeFailure(result.data));
      return result;
    } catch (err) {
      dispatch(swipeFailure(err.response.data));
      return err.response;
    }
  };
}

export function dislike(data) {
  return async (dispatch) => {
    dispatch(dislikeBegin());
    try {
      const result = await apiPost(DISLIKE, data);
      console.log("RESULT: ", result);
      if (result) dispatch(dislikeSuccess(result.data));
      if (!result) dispatch(dislikeFailure(result.data));
      return result;
    } catch (err) {
      dispatch(dislikeFailure(err.response.data));
      return err.response;
    }
  };
}

export function searchUser(data) {
  return async (dispatch) => {
    dispatch(searchUserBegin());
    try {
      const result = await apiPost(SEARCHUSER, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(searchUserSuccess(result.data));
      if (!result.success) dispatch(searchUserFailure(result.data));
      return result;
    } catch (err) {
      dispatch(searchUserFailure(err.response.data));
      return err.response;
    }
  };
}

export function getMyLikes(data) {
  return async (dispatch) => {
    dispatch(getMyLikesBegin());
    try {
      const result = await apiPost(GETMYLIKES, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getMyLikesSuccess(result.data));
      if (!result.success) dispatch(getMyLikesFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getMyLikesFailure(err.response.data));
      return err.response;
    }
  };
}

import axios from "axios";
import {
  ////Special Request
  ADDSPECIALREQUEST,
  SUBMITPROFILE,
  GETALLSPECIALREQUEST,
  GETPROFILESUBMITTERS,
} from "../../constants/url";
import { utils } from "../../utils";

const {
  apiPost,
  apiGet,
  clearUserData,
  setUserData,

} = utils;

export function addSpecialRequest(data) {
  return async (dispatch) => {
    dispatch(addSpecialRequestBegin());
    try {
      const result = await apiPost(ADDSPECIALREQUEST, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(addSpecialRequestSuccess(result.data));
      if (!result.success) dispatch(addSpecialRequestFailure(result.data));
      return result;
    } catch (err) {
      dispatch(addSpecialRequestFailure(err.response.data));
      return err.response;
    }
  };
}

export function submitProfile(data) {
  return async (dispatch) => {
    dispatch(submitProfileBegin());
    try {
      const result = await apiPost(SUBMITPROFILE, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(submitProfileSuccess(result.data));
      if (!result.success) dispatch(submitProfileFailure(result.data));
      return result;
    } catch (err) {
      dispatch(submitProfileFailure(err.response.data));
      return err.response;
    }
  };
}

export function getAllSpecialRequest(data) {
  return async (dispatch) => {
    dispatch(getAllSpecialRequestBegin());
    try {
      const result = await apiPost(GETALLSPECIALREQUEST, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getAllSpecialRequestSuccess(result.data));
      if (!result.success) dispatch(getAllSpecialRequestFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getAllSpecialRequestFailure(err.response.data));
      return err.response;
    }
  };
}

export function getProfileSubmitters(data) {
  return async (dispatch) => {
    dispatch(getProfileSubmittersBegin());
    try {
      const result = await apiPost(GETPROFILESUBMITTERS, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getProfileSubmittersSuccess(result.data));
      if (!result.success) dispatch(getProfileSubmittersFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getProfileSubmittersFailure(err.response.data));
      return err.response;
    }
  };
}



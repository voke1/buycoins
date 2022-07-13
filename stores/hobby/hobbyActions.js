import axios from "axios";
import { ////Hobby
  ADDHOBBY,
  GETHOBBIES,
  GETHOBBIESBYCATEGORY,
  GETHOBBIESBYUSERID,
  ADDHOBBYCATEGORY,
  GETHOBBIESCATEGORY, } from "../../constants/url";
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
  getHobbiesBegin,
  getHobbiesFailure,
  getHobbiesSuccess,
} = utils;

export function addHobby(data) {
  return async (dispatch) => {
    dispatch(addHobbyBegin());
    try {
      const result = await apiPost(ADDHOBBY, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(addHobbySuccess(result.data));
      if (!result.success) dispatch(addHobbyFailure(result.data));
      return result;
    } catch (err) {
      dispatch(addHobbyFailure(err.response.data));
      return err.response;
    }
  };
}

export function getHobbies(data) {
  return async (dispatch) => {
    dispatch(getHobbiesBegin());
    try {
      const result = await apiGet(GETHOBBIES, data);
      // console.log("RESULT: ", result);
      if (result) dispatch(getHobbiesSuccess(result));
      if (!result) dispatch(getHobbiesFailure(result));
      return result;
    } catch (err) {
      dispatch(getHobbiesFailure(err.response.data));
      return err.response;
    }
  };
}

export function getHobbiesCategory(data) {
  return async (dispatch) => {
    dispatch(getHobbiesCategoryBegin());
    try {
      const result = await apiGet(GETHOBBIESCATEGORY, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getHobbiesCategorySuccess(result.data));
      if (!result.success) dispatch(getHobbiesCategoryFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getHobbiesCategoryFailure(err.response.data));
      return err.response;
    }
  };
}

export function getHobbiesByUserId(data) {
  return async (dispatch) => {
    dispatch(getHobbiesByUserIdBegin());
    try {
      const result = await apiGet(GETHOBBIESBYUSERID, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(getHobbiesByUserIdSuccess(result.data));
      if (!result.success) dispatch(getHobbiesByUserIdFailure(result.data));
      return result;
    } catch (err) {
      dispatch(getHobbiesByUserIdFailure(err.response.data));
      return err.response;
    }
  };
}

export function addHobbyByCategory(data) {
  return async (dispatch) => {
    dispatch(addHobbyByCategoryBegin());
    try {
      const result = await apiPost(ADDHOBBYCATEGORY, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(addHobbyByCategorySuccess(result.data));
      if (!result.success) dispatch(addHobbyByCategoryFailure(result.data));
      return result;
    } catch (err) {
      dispatch(addHobbyByCategoryFailure(err.response.data));
      return err.response;
    }
  };
}

export function getHobbiesByCategory(data) {
  return async (dispatch) => {
    dispatch(getHobbiesByCategoryBegin());
    try {
      const result = await apiGet(GETHOBBIESBYCATEGORY, data);
      // console.log("RESULT: ", result);
      if (result) dispatch(getHobbiesByCategorySuccess(result));
      if (!result) dispatch(getHobbiesByCategoryFailure(result));
      return result;
    } catch (err) {
      dispatch(getHobbiesByCategoryFailure(err.response.data));
      return err.response;
    }
  };
}




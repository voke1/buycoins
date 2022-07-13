import axios from "axios";
import { CLEAR_REDUX_STATE, LOGIN_SUCCESS } from "../../constants/types";
import {
  HEALTHCHECK,
  BOOSTPROFILE,
  UPGRADEACCOUNT,
  GETALLUSERS,
  SHOWLASTACTIVE,
  PAUSEPROFILE,
  CREATEPHONEACCOUNT,
  FACEBOOKLOGIN,
  GMAILLOGIN,
  GMAILSIGNUP,
  AUTHORIZEINSTAGRAM,
  FACEBOOKSIGNUP,
  GENERATETOKEN,
  ZODIACSIGN,
  CREATEACCOUNTDETAILS,
  CREATEACCOUNTPROFILE,
  UPLOAD,
  GETLISTOFCOUNTRIES,
  UPDATEPROFILE,
  VERIFYTOKEN,
  GETSTATESCOUNTRY,
  GETCITIESSTATE,
  DASHBOARDBYID,
  DASHBOARD,
  LOGIN,
  LOGOUT,
  FILTER,
} from "../../constants/url";
import utils from "../../utils/Utils.js";

const {
  // signUpBegin,
  // loginBegin,
  // loginFailure,
  // loginSuccess,
  // getUserData,
  // signUpFailure,
  // signUpSuccess,

  setInterestInSuccess,

  setAuthSuccess,

  isValidEmail,
  validateEmail,
  validatePassword,
  validateInput,
  calculateAngle,
  getItem,
  removeItem,
  clearUserData,
  getUserData,
  setUserData,
  clearAsyncStorage,
  setItem,
  apiDelete,
  apiPost,
  apiGet,
  apiPut,
  getHeaders,

  healthCheckBegin,
  healthCheckFailure,
  healthCheckSuccess,

  boostProfileBegin,
  boostProfileFailure,
  boostProfileSuccess,

  upgradeAccountBegin,
  upgradeAccountFailure,
  upgradeAccountSuccess,

  getAllUsersBegin,
  getAllUsersFailure,
  getAllUsersSuccess,

  showLastActiveBegin,
  showLastActiveFailure,
  showLastActiveSuccess,

  pauseProfileBegin,
  pauseProfileFailure,
  pauseProfileSuccess,

  createPhoneAccountBegin,
  createPhoneAccountFailure,
  createPhoneAccountSuccess,

  facebookLoginBegin,
  facebookLoginFailure,
  facebookLoginSuccess,

  gmailLoginBegin,
  gmailLoginFailure,
  gmailLoginSuccess,

  gmailSignUpBegin,
  gmailSignUpFailure,
  gmailSignUpSuccess,

  authorizeInstagramBegin,
  authorizeInstagramFailure,
  authorizeInstagramSuccess,

  facebookSignUpBegin,
  facebookSignUpFailure,
  facebookSignUpSuccess,

  generateTokenBegin,
  generateTokenFailure,
  generateTokenSuccess,

  zodiacSignBegin,
  zodiacSignFailure,
  zodiacSignSuccess,

  createAccountProfileBegin,
  createAccountProfileFailure,
  createAccountProfileSuccess,

  uploadBegin,
  uploadFailure,
  uploadSuccess,

  getListOfCountriesBegin,
  getListOfCountriesFailure,
  getListOfCountriesSuccess,

  updateProfileBegin,
  updateProfileFailure,
  updateProfileSuccess,

  verifyTokenBegin,
  verifyTokenFailure,
  verifyTokenSuccess,

  getStatesCountriesBegin,
  getStatesCountriesFailure,
  getStatesCountriesSuccess,

  getCitiesStateBegin,
  getCitiesStateFailure,
  getCitiesStateSuccess,

  dashboardByIdBegin,
  dashboardByIdFailure,
  dashboardByIdSuccess,

  logoutBegin,
  logoutFailure,
  logoutSuccess,

  dashboardBegin,
  dashboardFailure,
  dashboardSuccess,

  loginSuccess,
  loginBegin,
  loginFailure,

  setGenderSuccess,
  setPhotoSuccess,
  setLocationSuccess,
  setOriginSuccess,
  setSeekSuccess,
  setReligionSuccess,
  setNameSuccess,
  setHobbiesSuccess,
  setEmailSuccess,
  setDOBSuccess,

  createAccountDetailsBegin,
  createAccountDetailsFailure,
  createAccountDetailsSuccess,

  setOccupationSuccess,
  filterBegin,
  filterFailure,
  filterSuccess,
} = utils;


///Use the function to login 
export function loginINterchange(data) {
  console.log("MYDATA: ", data);
  return async (dispatch) => {
    dispatch(loginBegin());
    console.log("got here: ", result);

    const result = await apiPost(LOGIN, data);
    console.log("RESULsdfT: ", result);
    if (result?.responseMessage == "Success") {
      console.log("GOT HERE FROM LGOIN");
      await setUserData(result);
    
      dispatch(loginSuccess(result));

      return result;
    }
    console.log("RESULT FROM not LOGIN:; ", result);
    if (!result?.responseMessage) dispatch(loginFailure(result));
    // } catch (err) {
    // console.log("RESPONSE ERROR: ", err)
    // dispatch(loginFailure(err.response.data));
    // return err;
    // }
  };
}

export function login(data) {
  console.log("MYDATA: ", data);
  return async (dispatch) => {
    dispatch(loginSuccess());
 
  };
}

// export function signup(data) {
//   return async (dispatch) => {
//     dispatch(signUpBegin());
//     try {
//       const result = await apiPost(SIGNUP, data);
//       // console.log("RESULT: ", result);
//       if (result.responseMessage == "Success") dispatch(signUpSuccess(result));
//       if (!result.responseMessage) dispatch(signUpFailure(result));
//       return result;
//     } catch (err) {
//       dispatch(signUpFailure(err.response.data));
//       return err.response;
//     }
//   };
// }

// export function logout() {
//   dispatch({ type: types.CLEAR_REDUX_STATE });
//   clearUserData();
// }

// Account integrations

//Account Health check
export function healthCheck(data) {
  return async (dispatch) => {
    dispatch(healthCheckBegin());
    try {
      const result = await apiGet(HEALTHCHECK, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(healthCheckSuccess(result));
      if (!result.responseMessage) dispatch(healthCheckFailure(result));
      return result;
    } catch (err) {
      dispatch(healthCheckFailure(err.response.data));
      return err.response;
    }
  };
}

export function boostProfile(data) {
  return async (dispatch) => {
    dispatch(boostProfileBegin());
    try {
      const result = await apiPost(BOOSTPROFILE, data);
      console.log("REdsfsdfdsfdSULT: ", result);
      if (result.responseMessage == "Kindly upgrade your account") {
        dispatch(boostProfileSuccess(result));
        return result;
      } else {
        dispatch(boostProfileFailure(result));
        return result;
      }
    } catch (err) {
      dispatch(boostProfileFailure(err));
      return err;
    }
  };
}

export function upgradeAccount(data) {
  return async (dispatch) => {
    dispatch(upgradeAccountBegin());
    try {
      const result = await apiPost(UPGRADEACCOUNT, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(upgradeAccountSuccess(result));
      if (!result.responseMessage) dispatch(upgradeAccountFailure(result));
      return result;
    } catch (err) {
      dispatch(upgradeAccountFailure(err.response.data));
      return err.response;
    }
  };
}

export function getAllUsers(data) {
  return async (dispatch) => {
    dispatch(getAllUsersBegin());
    try {
      const result = await apiPost(GETALLUSERS, data);
      console.log("RESULT: ", result);
      if (result) console.log("GOT HERE");
      dispatch(getAllUsersSuccess(result));
      if (!result) dispatch(getAllUsersFailure(result));
      return result;
    } catch (err) {
      dispatch(getAllUsersFailure(err.response.data));
      return err.response;
    }
  };
}

export function showLastActive(data) {
  return async (dispatch) => {
    dispatch(showLastActiveBegin());
    try {
      const result = await apiPost(SHOWLASTACTIVE, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(showLastActiveSuccess(result));
      if (!result.responseMessage) dispatch(showLastActiveFailure(result));
      return result;
    } catch (err) {
      dispatch(showLastActiveFailure(err.response.data));
      return err.response;
    }
  };
}

export function pauseProfile(data) {
  return async (dispatch) => {
    dispatch(pauseProfileBegin());
    try {
      const result = await apiPost(PAUSEPROFILE, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(pauseProfileSuccess(result));
      if (!result.responseMessage) dispatch(pauseProfileFailure(result));
      return result;
    } catch (err) {
      dispatch(pauseProfileFailure(err.response.data));
      return err.response;
    }
  };
}

export function createPhoneAccount(data) {
  return async (dispatch) => {
    dispatch(createPhoneAccountBegin());
    try {
      const result = await apiPost(CREATEPHONEACCOUNT, data);
      console.log("RESULT POSTING: ", result);

      if (result.responseMessage == "Success") {
        await setUserData(result);
        dispatch(createPhoneAccountSuccess(result));
        return result;
      }
      if (!result.token) dispatch(createPhoneAccountFailure(result));
      return result;
    } catch (err) {
      dispatch(createPhoneAccountFailure(err.response.data));
      return err.response;
    }
  };
}

export function facebookLogin(data) {
  return async (dispatch) => {
    dispatch(facebookLoginBegin());
    try {
      const result = await apiGet(FACEBOOKLOGIN, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(facebookLoginSuccess(result));
      if (!result.responseMessage) dispatch(facebookLoginFailure(result));
      return result;
    } catch (err) {
      dispatch(facebookLoginFailure(err.response.data));
      return err.response;
    }
  };
}

export function gmailLogin(data) {
  return async (dispatch) => {
    dispatch(gmailLoginBegin());
    try {
      const result = await apiPost(GMAILLOGIN, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(gmailLoginSuccess(result));
      if (!result.responseMessage) dispatch(gmailLoginFailure(result));
      return result;
    } catch (err) {
      dispatch(gmailLoginFailure(err.response.data));
      return err.response;
    }
  };
}

export function gmailSignUp(data) {
  return async (dispatch) => {
    dispatch(gmailSignUpBegin());
    try {
      const result = await apiPost(GMAILSIGNUP, data);
      console.log("GMAIL RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(gmailSignUpSuccess(result));
      if (!result.responseMessage) dispatch(gmailSignUpFailure(result));
      return result;
    } catch (err) {
      dispatch(gmailSignUpFailure(err.response.data));
      return err.response;
    }
  };
}

export function authorizeInstagram(data) {
  return async (dispatch) => {
    dispatch(authorizeInstagramBegin());
    try {
      const result = await apiGet(AUTHORIZEINSTAGRAM, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(authorizeInstagramSuccess(result));
      if (!result.responseMessage) dispatch(authorizeInstagramFailure(result));
      return result;
    } catch (err) {
      dispatch(authorizeInstagramFailure(err.response.data));
      return err.response;
    }
  };
}

export function facebookSignUp(data) {
  return async (dispatch) => {
    dispatch(facebookSignUpBegin());
    try {
      const result = await apiGet(FACEBOOKSIGNUP, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(facebookSignUpSuccess(result));
      if (!result.responseMessage) dispatch(facebookSignUpFailure(result));
      return result;
    } catch (err) {
      dispatch(facebookSignUpFailure(err.response.data));
      return err.response;
    }
  };
}

export function generateToken(data) {
  return async (dispatch) => {
    dispatch(generateTokenBegin());
    // try {
    const result = await apiPost(GENERATETOKEN, data);
    console.log("GENERATE TOKEN RESULT: ", result);
    if (result) dispatch(generateTokenSuccess(result));
    if (!result) dispatch(generateTokenFailure(result));
    return result;
    // } catch (err) {
    //   dispatch(generateTokenFailure(err.response.data));
    //   return err.response;
    // }
  };
}

export function zodiacSign(data) {
  return async (dispatch) => {
    dispatch(zodiacSignBegin());
    try {
      const result = await apiPost(ZODIACSIGN, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(zodiacSignSuccess(result));
      if (!result.responseMessage) dispatch(zodiacSignFailure(result));
      return result;
    } catch (err) {
      dispatch(zodiacSignFailure(err.response.data));
      return err.response;
    }
  };
}

export function createAccountDetails(data) {
  return async (dispatch) => {
    dispatch(createAccountDetailsBegin());
    try {
      const result = await apiPost(CREATEACCOUNTDETAILS, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(createAccountDetailsSuccess(result));
      if (!result.responseMessage)
        dispatch(createAccountDetailsFailure(result));
      return result;
    } catch (err) {
      dispatch(createAccountDetailsFailure(err.response.data));
      return err.response;
    }
  };
}

export function createAccountProfile(data) {
  return async (dispatch) => {
    dispatch(createAccountProfileBegin());
    try {
      const result = await apiPost(CREATEACCOUNTPROFILE, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(createAccountProfileSuccess(result));
      if (!result.responseMessage)
        dispatch(createAccountProfileFailure(result));
      return result;
    } catch (err) {
      dispatch(createAccountProfileFailure(err.response.data));
      return err.response;
    }
  };
}

export function upload(data) {
  return async (dispatch) => {
    dispatch(uploadBegin());
    try {
      const result = await apiPost(UPLOAD, data);
      console.log("PHOTO RESULT: ", result);
      if (result.responseMessage == "Success") dispatch(uploadSuccess(result));
      if (!result.responseMessage) dispatch(uploadFailure(result));
      return result;
    } catch (err) {
      dispatch(uploadFailure(err.response.data));
      return err.response;
    }
  };
}

export function getListOfCountries() {
  return async (dispatch) => {
    dispatch(getListOfCountriesBegin());
    // try {
    const result = await apiPost(GETLISTOFCOUNTRIES);
    console.log("RESULTcountries: ", result);
    if (result.name) dispatch(getListOfCountriesSuccess(result.name));
    if (!result.name) dispatch(getListOfCountriesFailure(result));
    return result;
    // } catch (err) {
    //   dispatch(getListOfCountriesFailure(err.response.data));
    //   return err.response;
    // }
  };
}

export function updateProfile(data) {
  return async (dispatch) => {
    dispatch(updateProfileBegin());
    try {
      const result = await apiPost(UPDATEPROFILE, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(updateProfileSuccess(result));
      if (!result.responseMessage) dispatch(updateProfileFailure(result));
      return result;
    } catch (err) {
      dispatch(updateProfileFailure(err.response.data));
      return err.response;
    }
  };
}

export function verifyToken(data) {
  return async (dispatch) => {
    dispatch(verifyTokenBegin());
    try {
      const result = await apiPost(VERIFYTOKEN, data);
      console.log("VERIFT TKEN RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(verifyTokenSuccess(result));
      if (!result.responseMessage) dispatch(verifyTokenFailure(result));
      return result;
    } catch (err) {
      dispatch(verifyTokenFailure(err.response.data));
      return err.response;
    }
  };
}

export function getStatesCountries(data) {
  return async (dispatch) => {
    dispatch(getStatesCountriesBegin());
    try {
      const result = await apiPost(GETSTATESCOUNTRY, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(getStatesCountriesSuccess(result));
      if (!result.responseMessage) dispatch(getStatesCountriesFailure(result));
      return result;
    } catch (err) {
      dispatch(getStatesCountriesFailure(err.response.data));
      return err.response;
    }
  };
}

export function getCitiesState(data) {
  return async (dispatch) => {
    dispatch(getCitiesStateBegin());
    try {
      const result = await apiPost(GETCITIESSTATE, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(getCitiesStateSuccess(result));
      if (!result.responseMessage) dispatch(getCitiesStateFailure(result));
      return result;
    } catch (err) {
      dispatch(getCitiesStateFailure(err.response.data));
      return err.response;
    }
  };
}

export function dashboardById(data) {
  return async (dispatch) => {
    dispatch(dashboardByIdBegin());
    try {
      const result = await apiPost(DASHBOARDBYID, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(dashboardByIdSuccess(result));
      if (!result.responseMessage) dispatch(dashboardByIdFailure(result));
      return result;
    } catch (err) {
      dispatch(dashboardByIdFailure(err.response.data));
      return err.response;
    }
  };
}

export function logout(data) {
  console.log("MYDATA: ", data);
  return async (dispatch) => {
    dispatch(logoutBegin());
    // try {
    const result = await apiPost(LOGOUT, data);
    console.log("LOGOUT RESULT: ", result);
    if (result) {
      // await setUserData(result);
      dispatch({ type: CLEAR_REDUX_STATE });
      await clearUserData();
      dispatch(logoutSuccess(result));

      return result;
    }
    // console.log("RESULT FROM not logout:; ", result)
    if (!result) dispatch(logoutFailure(result));
    // } catch (err) {
    //   // console.log("RESPONSE ERROR: ", err)
    //   // dispatch(logoutFailure(err.response.data));
    //   return err;
    // }
  };
}

export function dashboard(data) {
  return async (dispatch) => {
    dispatch(dashboardBegin());
    try {
      const result = await apiPost(DASHBOARD, data);
      // console.log("RESULT: ", result);
      if (result.responseMessage == "Success")
        dispatch(dashboardSuccess(result));
      if (!result.responseMessage) dispatch(dashboardFailure(result));
      return result;
    } catch (err) {
      dispatch(dashboardFailure(err.response.data));
      return err.response;
    }
  };
}

export function filter(filter) {
  return async (dispatch) => {
    dispatch(filterBegin());
    try {
      const result = await apiPost(FILTER, filter);
      console.log("FILTER RESULT: ", result);
      if (result.responseMessage == "Success") dispatch(filterSuccess(result));
      if (!result.responseMessage) dispatch(filterFailure(result));
      return result;
    } catch (err) {
      dispatch(filterFailure(err.response.data));
      return err.response;
    }
  };
}

export function setGender(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setGenderSuccess(data));
  };
}

export function setAuth(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setAuthSuccess(data));
  };
}

export function setPhoto(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setPhotoSuccess(data));
  };
}

export function setLocation(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setLocationSuccess(data));
  };
}

export function setOrigin(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setOriginSuccess(data));
  };
}

export function setSeek(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setSeekSuccess(data));
  };
}

export function setReligion(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setReligionSuccess(data));
  };
}

export function setOccupation(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setOccupationSuccess(data));
  };
}

export function setInterestIn(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setInterestInSuccess(data));
  };
}

export function setEmail(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setEmailSuccess(data));
  };
}

export function setHobbies(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setHobbiesSuccess(data));
  };
}

export function setName(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setNameSuccess(data));
  };
}

export function setDOB(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setDOBSuccess(data));
  };
}

export function saveUserData(data) {
  console.log("PROFILE SENT TO BACK: ", data);
  return async (dispatch) => {
    return dispatch(loginSuccess(data));
  };
}

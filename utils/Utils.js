import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../stores/store";
import {
  SETINTERESTIN_SUCCESS,
  HEALTHCHECK_BEGIN,
  BOOSTPROFILE_BEGIN,
  UPGRADEACCOUNT_BEGIN,
  GETALLUSERS_BEGIN,
  SHOWLASTACTIVE_BEGIN,
  PAUSEPROFILE_BEGIN,
  CREATEPHONEACCOUNT_BEGIN,
  FACEBOOKLOGIN_BEGIN,
  GMAILLOGIN_BEGIN,
  GMAILSIGNUP_BEGIN,
  AUTHORIZEINSTAGRAM_BEGIN,
  FACEBOOKSIGNUP_BEGIN,
  GENERATETOKEN_BEGIN,
  ZODIACSIGN_BEGIN,
  CREATEACCOUNTDETAILS_BEGIN,
  CREATEACCOUNTPROFILE_BEGIN,
  UPLOAD_BEGIN,
  GETLISTOFCOUNTRIES_BEGIN,
  UPDATEPROFILE_BEGIN,
  VERIFYTOKEN_BEGIN,
  GETSTATESCOUNTRY_BEGIN,
  GETCITIESSTATE_BEGIN,
  DASHBOARDBYID_BEGIN,
  DASHBOARD_BEGIN,
  LOGIN_BEGIN,
  LOGOUT_BEGIN,
  FILTER_BEGIN,
  HEALTHCHECK_SUCCESS,
  BOOSTPROFILE_SUCCESS,
  UPGRADEACCOUNT_SUCCESS,
  GETALLUSERS_SUCCESS,
  SHOWLASTACTIVE_SUCCESS,
  PAUSEPROFILE_SUCCESS,
  CREATEPHONEACCOUNT_SUCCESS,
  FACEBOOKLOGIN_SUCCESS,
  GMAILLOGIN_SUCCESS,
  GMAILSIGNUP_SUCCESS,
  AUTHORIZEINSTAGRAM_SUCCESS,
  FACEBOOKSIGNUP_SUCCESS,
  GENERATETOKEN_SUCCESS,
  ZODIACSIGN_SUCCESS,
  CREATEACCOUNTDETAILS_SUCCESS,
  CREATEACCOUNTPROFILE_SUCCESS,
  UPLOAD_SUCCESS,
  GETLISTOFCOUNTRIES_SUCCESS,
  UPDATEPROFILE_SUCCESS,
  VERIFYTOKEN_SUCCESS,
  GETSTATESCOUNTRY_SUCCESS,
  GETCITIESSTATE_SUCCESS,
  DASHBOARDBYID_SUCCESS,
  DASHBOARD_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FILTER_SUCCESS,
  HEALTHCHECK_FAILURE,
  BOOSTPROFILE_FAILURE,
  UPGRADEACCOUNT_FAILURE,
  GETALLUSERS_FAILURE,
  SHOWLASTACTIVE_FAILURE,
  PAUSEPROFILE_FAILURE,
  CREATEPHONEACCOUNT_FAILURE,
  FACEBOOKLOGIN_FAILURE,
  GMAILLOGIN_FAILURE,
  GMAILSIGNUP_FAILURE,
  AUTHORIZEINSTAGRAM_FAILURE,
  FACEBOOKSIGNUP_FAILURE,
  GENERATETOKEN_FAILURE,
  ZODIACSIGN_FAILURE,
  CREATEACCOUNTDETAILS_FAILURE,
  CREATEACCOUNTPROFILE_FAILURE,
  UPLOAD_FAILURE,
  GETLISTOFCOUNTRIES_FAILURE,
  UPDATEPROFILE_FAILURE,
  VERIFYTOKEN_FAILURE,
  GETSTATESCOUNTRY_FAILURE,
  GETCITIESSTATE_FAILURE,
  DASHBOARDBYID_FAILURE,
  DASHBOARD_FAILURE,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  FILTER_FAILURE,
  SETGENDER_SUCCESS,
  SETOCCUPATION_SUCCESS,

  //Dating
  LIKE_BEGIN,
  FEEDS_BEGIN,
  SENDMESSAGE_DATING_BEGIN,
  GETMYCHATTERS_BEGIN,
  MYMESSAGES_DATING_BEGIN,
  MATCHPROFILE_BEGIN,
  SWIPE_BEGIN,
  DISLIKE_BEGIN,
  SEARCHUSER_BEGIN,
  GETMYLIKES_BEGIN,
  LIKE_SUCCESS,
  FEEDS_SUCCESS,
  SENDMESSAGE_DATING_SUCCESS,
  GETMYCHATTERS_SUCCESS,
  MYMESSAGES_DATING_SUCCESS,
  MATCHPROFILE_SUCCESS,
  SWIPE_SUCCESS,
  DISLIKE_SUCCESS,
  SEARCHUSER_SUCCESS,
  GETMYLIKES_SUCCESS,
  LIKE_FAILURE,
  FEEDS_FAILURE,
  SENDMESSAGE_DATING_FAILURE,
  GETMYCHATTERS_FAILURE,
  MYMESSAGES_DATING_FAILURE,
  MATCHPROFILE_FAILURE,
  SWIPE_FAILURE,
  DISLIKE_FAILURE,
  SEARCHUSER_FAILURE,
  GETMYLIKES_FAILURE,

  //Gift
  BUYGIFT_BEGIN,
  GETALLGIFT_BEGIN,
  SELLGIFT_BEGIN,
  GETALLMYGIFT_BEGIN,
  GETMYGIFTTOKEN_BEGIN,
  SENDGIFT_BEGIN,
  GETMYGIFT_BEGIN,
  BUYGIFT_SUCCESS,
  GETALLGIFT_SUCCESS,
  SELLGIFT_SUCCESS,
  GETALLMYGIFT_SUCCESS,
  GETMYGIFTTOKEN_SUCCESS,
  SENDGIFT_SUCCESS,
  GETMYGIFT_SUCCESS,
  BUYGIFT_FAILURE,
  GETALLGIFT_FAILURE,
  SELLGIFT_FAILURE,
  GETALLMYGIFT_FAILURE,
  GETMYGIFTTOKEN_FAILURE,
  SENDGIFT_FAILURE,
  GETMYGIFT_FAILURE,

  //Hobby
  ADDHOBBY_SUCCESS,
  GETHOBBIES_SUCCESS,
  GETHOBBIESBYCATEGORY_SUCCESS,
  GETHOBBIESBYUSERID_SUCCESS,
  ADDHOBBYCATEGORY_SUCCESS,
  GETHOBBIESCATEGORY_SUCCESS,
  ADDHOBBY_FAILURE,
  GETHOBBIES_FAILURE,
  GETHOBBIESBYCATEGORY_FAILURE,
  GETHOBBIESBYUSERID_FAILURE,
  ADDHOBBYCATEGORY_FAILURE,
  GETHOBBIESCATEGORY_FAILURE,
  ADDHOBBY_BEGIN,
  GETHOBBIES_BEGIN,
  GETHOBBIESBYCATEGORY_BEGIN,
  GETHOBBIESBYUSERID_BEGIN,
  ADDHOBBYCATEGORY_BEGIN,
  GETHOBBIESCATEGORY_BEGIN,

  ////Message,
  SENDMESSAGE_SUCCESS,
  MYMESSAGES_SUCCESS,
  SENDMESSAGE_FAILURE,
  MYMESSAGES_FAILURE,
  SENDMESSAGE_BEGIN,
  MYMESSAGES_BEGIN,

  ////Notification,
  GETNOTIFICATION_SUCCESS,
  VIEWNOTIFICATION_SUCCESS,
  JOINROOM_SUCCESS,
  GETNOTIFICATION_FAILURE,
  VIEWNOTIFICATION_FAILURE,
  JOINROOM_FAILURE,
  GETNOTIFICATION_BEGIN,
  VIEWNOTIFICATION_BEGIN,
  JOINROOM_BEGIN,

  ////SMS,
  QUEUESMS_BEGIN,
  SENDSMS_BEGIN,
  SENDQUEUEDSMS_BEGIN,
  QUEUESMS_SUCCESS,
  SENDSMS_SUCCESS,
  SENDQUEUEDSMS_SUCCESS,
  QUEUESMS_FAILURE,
  SENDSMS_FAILURE,
  SENDQUEUEDSMS_FAILURE,

  ////Special Request,
  ADDSPECIALREQUEST_SUCCESS,
  SUBMITPROFILE_SUCCESS,
  GETALLSPECIALREQUEST_SUCCESS,
  GETPROFILESUBMITTERS_SUCCESS,
  ADDSPECIALREQUEST_FAILURE,
  SUBMITPROFILE_FAILURE,
  GETALLSPECIALREQUEST_FAILURE,
  GETPROFILESUBMITTERS_FAILURE,
  ADDSPECIALREQUEST_BEGIN,
  SUBMITPROFILE_BEGIN,
  GETALLSPECIALREQUEST_BEGIN,
  GETPROFILESUBMITTERS_BEGIN,

  ////Wallet
  CREATEWALLET_SUCCESS,
  CREDITACCOUNT_SUCCESS,
  WALLETINFO_SUCCESS,
  WALLETTRANSACTIONS_SUCCESS,
  FUNDWALLETWITHCARD_SUCCESS,
  FUNDWALLETWITHBTC_SUCCESS,
  WITHDRAWTOBTCFROMWALLET_SUCCESS,
  APPROVEBTCTRANSACTION_SUCCESS,
  CREATEWALLET_BEGIN,
  CREDITACCOUNT_BEGIN,
  WALLETINFO_BEGIN,
  WALLETTRANSACTIONS_BEGIN,
  FUNDWALLETWITHCARD_BEGIN,
  FUNDWALLETWITHBTC_BEGIN,
  WITHDRAWTOBTCFROMWALLET_BEGIN,
  APPROVEBTCTRANSACTION_BEGIN,
  CREATEWALLET_FAILURE,
  CREDITACCOUNT_FAILURE,
  WALLETINFO_FAILURE,
  WALLETTRANSACTIONS_FAILURE,
  FUNDWALLETWITHCARD_FAILURE,
  FUNDWALLETWITHBTC_FAILURE,
  WITHDRAWTOBTCFROMWALLET_FAILURE,
  APPROVEBTCTRANSACTION_FAILURE,
  CLEAR_REDUX_STATE,
  SETPHOTO_SUCCESS,
  SETLOCATION_SUCCESS,
  SETORIGIN_SUCCESS,
  SETSEEK_SUCCESS,
  SETRELIGION_SUCCESS,
  SETNAME_SUCCESS,
  SETHOBBIES_SUCCESS,
  SETEMAIL_SUCCESS,
  SETDOB_SUCCESS,
  SETAUTH_SUCCESS,
} from "../constants/types";

const { dispatch, getState } = store;

function isValidEmail(value) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateConfirmPassword(value, password, setConfirmPasswordError) {
  if (value != password) {
    setConfirmPasswordError("Password not the same");
  } else {
    setConfirmPasswordError("");
  }
}

function validateEmail(value, setEmailError) {
  if (value == "") {
    setEmailError("");
  } else if (isValidEmail(value)) {
    setEmailError("");
  } else {
    setEmailError("Invalid Email");
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError("Password must be 9 characters");
  } else {
    setPasswordError("");
  }
}

function validateInput(value, minLength, setError) {
  if (value.length < minLength) {
    setError("Invalid Input");
  } else {
    setError("");
  }
}

function calculateAngle(coordinates) {
  let startLat = coordinates[0]["latitude"];
  let startLng = coordinates[0]["longitude"];
  let endLat = coordinates[1]["latitude"];
  let endLng = coordinates[1]["longitude"];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

export async function getHeaders() {
  let userData = await AsyncStorage.getItem("userData");
  console.log("USERDATAT UITLA: ", userData);
  if (userData) {
    userData = JSON.parse(userData);
    return {
      authorization: `Bearer ${userData.jwtToken || userData.jwt}`,
      Accept: "application/json",
    };
  }
  return {};
}
export const noInternet = () => ({
  type: types.NO_INTERNET,
  payload: { internetConnection: true },
});

export const clearState = () => ({
  type: CLEAR_REDUX_STATE,
  payload: {},
});

export const healthCheckSuccess = (healthCheck) => ({
  type: HEALTHCHECK_SUCCESS,
  payload: { healthCheck },
});

export const healthCheckBegin = () => ({
  type: HEALTHCHECK_BEGIN,
  payload: {},
});

export const healthCheckFailure = (error) => ({
  type: HEALTHCHECK_FAILURE,
  payload: { error },
});

export const boostProfileSuccess = (boostProfile) => ({
  type: BOOSTPROFILE_SUCCESS,
  payload: { boostProfile },
});

export const boostProfileBegin = () => ({
  type: BOOSTPROFILE_BEGIN,
  payload: {},
});

export const boostProfileFailure = (error) => ({
  type: BOOSTPROFILE_FAILURE,
  payload: { error },
});

export const upgradeAccountSuccess = (upgradeAccount) => ({
  type: UPGRADEACCOUNT_SUCCESS,
  payload: { upgradeAccount },
});

export const upgradeAccountBegin = () => ({
  type: UPGRADEACCOUNT_BEGIN,
  payload: {},
});

export const upgradeAccountFailure = (error) => ({
  type: UPGRADEACCOUNT_FAILURE,
  payload: { error },
});

export const loginSuccess = (loggedInUser) => ({
  type: LOGIN_SUCCESS,
  payload: { loggedInUser },
});

export const loginBegin = () => ({
  type: LOGIN_BEGIN,
  payload: {},
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const getAllUsersSuccess = (allUsers) => ({
  type: GETALLUSERS_SUCCESS,
  payload: { allUsers },
});

export const getAllUsersBegin = () => ({
  type: GETALLUSERS_BEGIN,
  payload: {},
});

export const getAllUsersFailure = (error) => ({
  type: GETALLUSERS_FAILURE,
  payload: { error },
});

export const showLastActiveSuccess = (lastActive) => ({
  type: SHOWLASTACTIVE_SUCCESS,
  payload: { lastActive },
});

export const showLastActiveBegin = () => ({
  type: SHOWLASTACTIVE_BEGIN,
  payload: {},
});

export const showLastActiveFailure = (error) => ({
  type: SHOWLASTACTIVE_FAILURE,
  payload: { error },
});

export const pauseProfileSuccess = (pauseProfile) => ({
  type: PAUSEPROFILE_SUCCESS,
  payload: { pauseProfile },
});

export const pauseProfileBegin = () => ({
  type: PAUSEPROFILE_BEGIN,
  payload: {},
});

export const pauseProfileFailure = (error) => ({
  type: PAUSEPROFILE_FAILURE,
  payload: { error },
});

export const createPhoneAccountSuccess = (phoneAccount) => ({
  type: CREATEPHONEACCOUNT_SUCCESS,
  payload: { phoneAccount },
});

export const createPhoneAccountBegin = () => ({
  type: CREATEPHONEACCOUNT_BEGIN,
  payload: {},
});

export const createPhoneAccountFailure = (error) => ({
  type: CREATEPHONEACCOUNT_FAILURE,
  payload: { error },
});

export const facebookLoginSuccess = (facebookLogin) => ({
  type: FACEBOOKLOGIN_SUCCESS,
  payload: { facebookLogin },
});

export const facebookLoginBegin = () => ({
  type: FACEBOOKLOGIN_BEGIN,
  payload: {},
});

export const facebookLoginFailure = (error) => ({
  type: FACEBOOKLOGIN_FAILURE,
  payload: { error },
});

export const gmailLoginSuccess = (gmailLogin) => ({
  type: GMAILLOGIN_SUCCESS,
  payload: { gmailLogin },
});

export const gmailLoginBegin = () => ({
  type: GMAILLOGIN_BEGIN,
  payload: {},
});

export const gmailLoginFailure = (error) => ({
  type: GMAILLOGIN_FAILURE,
  payload: { error },
});

export const authorizeInstagramSuccess = (authorizeInstagram) => ({
  type: AUTHORIZEINSTAGRAM_SUCCESS,
  payload: { authorizeInstagram },
});

export const authorizeInstagramBegin = () => ({
  type: AUTHORIZEINSTAGRAM_BEGIN,
  payload: {},
});

export const authorizeInstagramFailure = (error) => ({
  type: AUTHORIZEINSTAGRAM_FAILURE,
  payload: { error },
});

export const facebookSignUpSuccess = (facebookSignUp) => ({
  type: FACEBOOKSIGNUP_SUCCESS,
  payload: { facebookSignUp },
});

export const facebookSignUpBegin = () => ({
  type: FACEBOOKSIGNUP_BEGIN,
  payload: {},
});

export const facebookSignUpFailure = (error) => ({
  type: FACEBOOKSIGNUP_FAILURE,
  payload: { error },
});

export const gmailSignUpSuccess = (gmailSignup) => ({
  type: GMAILSIGNUP_SUCCESS,
  payload: { gmailSignup },
});

export const gmailSignUpBegin = () => ({
  type: GMAILSIGNUP_BEGIN,
  payload: {},
});

export const gmailSignUpFailure = (error) => ({
  type: GMAILSIGNUP_FAILURE,
  payload: { error },
});

export const generateTokenSuccess = (generateToken) => ({
  type: GENERATETOKEN_SUCCESS,
  payload: { generateToken },
});

export const generateTokenBegin = () => ({
  type: GENERATETOKEN_BEGIN,
  payload: {},
});

export const generateTokenFailure = (error) => ({
  type: GENERATETOKEN_FAILURE,
  payload: { error },
});

export const zodiacSignSuccess = (zodiacSign) => ({
  type: ZODIACSIGN_SUCCESS,
  payload: { zodiacSign },
});

export const zodiacSignBegin = () => ({
  type: ZODIACSIGN_BEGIN,
  payload: {},
});

export const zodiacSignFailure = (error) => ({
  type: ZODIACSIGN_FAILURE,
  payload: { error },
});

export const createAccountProfileSuccess = (accountProfile) => ({
  type: CREATEACCOUNTPROFILE_SUCCESS,
  payload: { accountProfile },
});

export const createAccountDetailsBegin = () => ({
  type: CREATEACCOUNTDETAILS_BEGIN,
  payload: {},
});

export const createAccountDetailsFailure = (error) => ({
  type: CREATEACCOUNTDETAILS_FAILURE,
  payload: { error },
});

export const createAccountDetailsSuccess = (user) => ({
  type: CREATEACCOUNTDETAILS_SUCCESS,
  payload: { user },
});

export const createAccountProfileBegin = () => ({
  type: CREATEACCOUNTPROFILE_BEGIN,
  payload: {},
});

export const createAccountProfileFailure = (error) => ({
  type: CREATEACCOUNTPROFILE_FAILURE,
  payload: { error },
});

export const uploadSuccess = (upload) => ({
  type: UPLOAD_SUCCESS,
  payload: { upload },
});

export const uploadBegin = () => ({
  type: UPLOAD_BEGIN,
  payload: {},
});

export const uploadFailure = (error) => ({
  type: UPLOAD_FAILURE,
  payload: { error },
});

export const getListOfCountriesSuccess = (listOfCountries) => ({
  type: GETLISTOFCOUNTRIES_SUCCESS,
  payload: { listOfCountries },
});

export const getListOfCountriesBegin = () => ({
  type: GETLISTOFCOUNTRIES_BEGIN,
  payload: {},
});

export const getListOfCountriesFailure = (error) => ({
  type: GETLISTOFCOUNTRIES_FAILURE,
  payload: { error },
});

export const updateProfileSuccess = (updateProfile) => ({
  type: UPDATEPROFILE_SUCCESS,
  payload: { updateProfile },
});

export const updateProfileBegin = () => ({
  type: UPDATEPROFILE_BEGIN,
  payload: {},
});

export const updateProfileFailure = (error) => ({
  type: UPDATEPROFILE_FAILURE,
  payload: { error },
});

export const verifyTokenSuccess = (verifyToken) => ({
  type: VERIFYTOKEN_SUCCESS,
  payload: { verifyToken },
});

export const verifyTokenBegin = () => ({
  type: VERIFYTOKEN_BEGIN,
  payload: {},
});

export const verifyTokenFailure = (error) => ({
  type: VERIFYTOKEN_FAILURE,
  payload: { error },
});

export const getStatesCountriesSuccess = (statesCountries) => ({
  type: GETSTATESCOUNTRY_SUCCESS,
  payload: { statesCountries },
});

export const getStatesCountriesBegin = () => ({
  type: GETSTATESCOUNTRY_BEGIN,
  payload: {},
});

export const getStatesCountriesFailure = (error) => ({
  type: GETSTATESCOUNTRY_FAILURE,
  payload: { error },
});

export const getCitiesStateSuccess = (citiesState) => ({
  type: GETCITIESSTATE_SUCCESS,
  payload: { citiesState },
});

export const getCitiesStateBegin = () => ({
  type: GETCITIESSTATE_BEGIN,
  payload: {},
});

export const getCitiesStateFailure = (error) => ({
  type: GETCITIESSTATE_FAILURE,
  payload: { error },
});

export const dashboardByIdSuccess = (dashboardById) => ({
  type: DASHBOARDBYID_SUCCESS,
  payload: { dashboardById },
});

export const dashboardByIdBegin = () => ({
  type: DASHBOARDBYID_BEGIN,
  payload: {},
});

export const dashboardByIdFailure = (error) => ({
  type: DASHBOARDBYID_FAILURE,
  payload: { error },
});

export const logoutSuccess = (logout) => ({
  type: LOGOUT_SUCCESS,
  payload: { logout },
});

export const logoutBegin = () => ({
  type: LOGOUT_BEGIN,
  payload: {},
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: { error },
});

export const dashboardSuccess = (dashboard) => ({
  type: DASHBOARD_SUCCESS,
  payload: { dashboard },
});

export const dashboardBegin = () => ({
  type: DASHBOARD_BEGIN,
  payload: {},
});

export const dashboardFailure = (error) => ({
  type: DASHBOARD_FAILURE,
  payload: { error },
});

export const filterSuccess = (filter) => ({
  type: FILTER_SUCCESS,
  payload: { filter },
});

export const filterBegin = () => ({
  type: FILTER_BEGIN,
  payload: {},
});

export const filterFailure = (error) => ({
  type: FILTER_FAILURE,
  payload: { error },
});

export const likeSuccess = (like) => ({
  type: LIKE_SUCCESS,
  payload: { like },
});

export const likeBegin = () => ({
  type: LIKE_BEGIN,
  payload: {},
});

export const likeFailure = (error) => ({
  type: LIKE_FAILURE,
  payload: { error },
});

export const feedsSuccess = (feeds) => ({
  type: FEEDS_SUCCESS,
  payload: { feeds },
});

export const feedsBegin = () => ({
  type: FEEDS_BEGIN,
  payload: {},
});

export const feedsFailure = (error) => ({
  type: FEEDS_FAILURE,
  payload: { error },
});

export const sendMessageSuccess = (sendMessage) => ({
  type: SENDMESSAGE_DATING_SUCCESS,
  payload: { sendMessage },
});

export const sendMessageBegin = () => ({
  type: SENDMESSAGE_BEGIN,
  payload: {},
});

export const sendMessageFailure = (error) => ({
  type: SENDMESSAGE_FAILURE,
  payload: { error },
});

export const getMyChattersSuccess = (myChatters) => ({
  type: GETMYCHATTERS_SUCCESS,
  payload: { myChatters },
});

export const getMyChattersBegin = () => ({
  type: GETMYCHATTERS_BEGIN,
  payload: {},
});

export const getMyChattersFailure = (error) => ({
  type: GETMYCHATTERS_FAILURE,
  payload: { error },
});

export const myMessagesSuccess = (myMessages) => ({
  type: MYMESSAGES_SUCCESS,
  payload: { myMessages },
});

export const myMessagesBegin = () => ({
  type: MYMESSAGES_BEGIN,
  payload: {},
});

export const myMessagesFailure = (error) => ({
  type: MYMESSAGES_FAILURE,
  payload: { error },
});

export const matchProfileSuccess = (matchProfile) => ({
  type: MATCHPROFILE_SUCCESS,
  payload: { matchProfile },
});

export const matchProfileBegin = () => ({
  type: MATCHPROFILE_BEGIN,
  payload: {},
});

export const matchProfileFailure = (error) => ({
  type: MATCHPROFILE_FAILURE,
  payload: { error },
});

export const swipeSuccess = (swipe) => ({
  type: SWIPE_SUCCESS,
  payload: { swipe },
});

export const swipeBegin = () => ({
  type: SWIPE_BEGIN,
  payload: {},
});

export const swipeFailure = (error) => ({
  type: SWIPE_FAILURE,
  payload: { error },
});

export const dislikeSuccess = (dislike) => ({
  type: DISLIKE_SUCCESS,
  payload: { dislike },
});

export const dislikeBegin = () => ({
  type: DISLIKE_BEGIN,
  payload: {},
});

export const dislikeFailure = (error) => ({
  type: DISLIKE_FAILURE,
  payload: { error },
});

export const searchUserSuccess = (searchUser) => ({
  type: SEARCHUSER_SUCCESS,
  payload: { searchUser },
});

export const searchUserBegin = () => ({
  type: SEARCHUSER_BEGIN,
  payload: {},
});

export const searchUserFailure = (error) => ({
  type: SEARCHUSER_FAILURE,
  payload: { error },
});

export const getMyLikesSuccess = (getMyLikes) => ({
  type: GETMYLIKES_SUCCESS,
  payload: { getMyLikes },
});

export const getMyLikesBegin = () => ({
  type: GETMYLIKES_BEGIN,
  payload: {},
});

export const getMyLikesFailure = (error) => ({
  type: GETMYLIKES_FAILURE,
  payload: { error },
});

export const getAllGiftSuccess = (allGifts) => ({
  type: GETALLGIFT_SUCCESS,
  payload: { allGifts },
});

export const getAllGiftBegin = () => ({
  type: GETALLGIFT_BEGIN,
  payload: {},
});

export const getAllGiftFailure = (error) => ({
  type: GETALLGIFT_FAILURE,
  payload: { error },
});

export const buyGiftSuccess = (buyGift) => ({
  type: BUYGIFT_SUCCESS,
  payload: { buyGift },
});

export const buyGiftBegin = () => ({
  type: BUYGIFT_BEGIN,
  payload: {},
});

export const buyGiftFailure = (error) => ({
  type: BUYGIFT_FAILURE,
  payload: { error },
});

export const sellGiftSuccess = (sellGift) => ({
  type: SELLGIFT_SUCCESS,
  payload: { sellGift },
});

export const sellGiftBegin = () => ({
  type: SELLGIFT_BEGIN,
  payload: {},
});

export const sellGiftFailure = (error) => ({
  type: SELLGIFT_FAILURE,
  payload: { error },
});

export const getAllMyGiftSuccess = (allMyGift) => ({
  type: GETALLMYGIFT_SUCCESS,
  payload: { allMyGift },
});

export const getAllMyGiftBegin = () => ({
  type: GETALLMYGIFT_BEGIN,
  payload: {},
});

export const getAllMyGiftFailure = (error) => ({
  type: GETALLMYGIFT_FAILURE,
  payload: { error },
});

export const getMyGiftTokenSuccess = (myGiftToken) => ({
  type: GETMYGIFTTOKEN_SUCCESS,
  payload: { myGiftToken },
});

export const getMyGiftTokenBegin = () => ({
  type: GETMYGIFTTOKEN_BEGIN,
  payload: {},
});

export const getMyGiftTokenFailure = (error) => ({
  type: GETMYGIFTTOKEN_FAILURE,
  payload: { error },
});

export const sendGiftSuccess = (sendGift) => ({
  type: SENDGIFT_SUCCESS,
  payload: { sendGift },
});

export const sendGiftBegin = () => ({
  type: SENDGIFT_BEGIN,
  payload: {},
});

export const sendGiftFailure = (error) => ({
  type: SENDGIFT_FAILURE,
  payload: { error },
});

export const getMyGiftSuccess = (myGift) => ({
  type: GETMYGIFT_SUCCESS,
  payload: { myGift },
});

export const getMyGiftBegin = () => ({
  type: GETMYGIFT_BEGIN,
  payload: {},
});

export const getMyGiftFailure = (error) => ({
  type: GETMYGIFT_FAILURE,
  payload: { error },
});

export const addHobbySuccess = (hobby) => ({
  type: ADDHOBBY_SUCCESS,
  payload: { hobby },
});

export const addHobbyBegin = () => ({
  type: ADDHOBBY_BEGIN,
  payload: {},
});

export const addHobbyFailure = (error) => ({
  type: ADDHOBBY_FAILURE,
  payload: { error },
});

export const getHobbiesSuccess = (getHobbies) => ({
  type: GETHOBBIES_SUCCESS,
  payload: { getHobbies },
});

export const getHobbiesBegin = () => ({
  type: GETHOBBIES_BEGIN,
  payload: {},
});

export const getHobbiesFailure = (error) => ({
  type: GETHOBBIES_FAILURE,
  payload: { error },
});

export const getHobbiesByCategorySuccess = (hobbiesByCategory) => ({
  type: GETHOBBIESBYCATEGORY_SUCCESS,
  payload: { hobbiesByCategory },
});

export const getHobbiesByCategoryBegin = () => ({
  type: GETHOBBIESBYCATEGORY_BEGIN,
  payload: {},
});

export const getHobbiesByCategoryFailure = (error) => ({
  type: GETHOBBIESBYCATEGORY_FAILURE,
  payload: { error },
});

export const getHobbiesByUserIdSuccess = (hobbiesByUserId) => ({
  type: GETHOBBIESBYUSERID_SUCCESS,
  payload: { hobbiesByUserId },
});

export const getHobbiesByUserIdBegin = () => ({
  type: GETHOBBIESBYUSERID_BEGIN,
  payload: {},
});

export const getHobbiesByUserIdFailure = (error) => ({
  type: GETHOBBIESBYUSERID_FAILURE,
  payload: { error },
});

export const addHobbyByCategorySuccess = (hobbyByCategory) => ({
  type: ADDHOBBYBYCATEGORY_SUCCESS,
  payload: { hobbyByCategory },
});

export const addHobbyByCategoryBegin = () => ({
  type: ADDHOBBYBYCATEGORY_BEGIN,
  payload: {},
});

export const addHobbyByCategoryFailure = (error) => ({
  type: ADDHOBBYBYCATEGORY_FAILURE,
  payload: { error },
});

export const getHobbiesCategorySuccess = (hobbiesCategory) => ({
  type: GETHOBBIESCATEGORY_SUCCESS,
  payload: { hobbiesCategory },
});

export const getHobbiesCategoryBegin = () => ({
  type: GETHOBBIESCATEGORY_BEGIN,
  payload: {},
});

export const getHobbiesCategoryFailure = (error) => ({
  type: GETHOBBIESCATEGORY_FAILURE,
  payload: { error },
});

export const viewNotificationSuccess = (viewedNotification) => ({
  type: VIEWNOTIFICATION_SUCCESS,
  payload: { viewedNotification },
});

export const viewNotificationBegin = () => ({
  type: VIEWNOTIFICATION_BEGIN,
  payload: {},
});

export const viewNotificationFailure = (error) => ({
  type: VIEWNOTIFICATION_FAILURE,
  payload: { error },
});

export const getNotificationSuccess = (notifications) => ({
  type: GETNOTIFICATION_SUCCESS,
  payload: { notifications },
});

export const getNotificationBegin = () => ({
  type: GETNOTIFICATION_BEGIN,
  payload: {},
});

export const getNotificationFailure = (error) => ({
  type: GETNOTIFICATION_FAILURE,
  payload: { error },
});

export const joinRoomSuccess = (joinRoom) => ({
  type: JOINROOM_SUCCESS,
  payload: { joinRoom },
});

export const joinRoomBegin = () => ({
  type: JOINROOM_BEGIN,
  payload: {},
});

export const joinRoomFailure = (error) => ({
  type: JOINROOM_FAILURE,
  payload: { error },
});

export const queueSmsSuccess = (queueSms) => ({
  type: QUEUESMS_SUCCESS,
  payload: { queueSms },
});

export const queueSmsBegin = () => ({
  type: QUEUESMS_BEGIN,
  payload: {},
});

export const queueSmsFailure = (error) => ({
  type: QUEUESMS_FAILURE,
  payload: { error },
});

export const sendSmsSuccess = (sendSms) => ({
  type: SENDSMS_SUCCESS,
  payload: { sendSms },
});

export const sendSmsBegin = () => ({
  type: SENDSMS_BEGIN,
  payload: {},
});

export const sendSmsFailure = (error) => ({
  type: SENDSMS_FAILURE,
  payload: { error },
});
export const sendQueuedSmsSuccess = (queuedSms) => ({
  type: SENDQUEUEDSMS_SUCCESS,
  payload: { queuedSms },
});

export const sendQueuedSmsBegin = () => ({
  type: SENDQUEUEDSMS_BEGIN,
  payload: {},
});

export const sendQueuedSmsFailure = (error) => ({
  type: SENDQUEUEDSMS_FAILURE,
  payload: { error },
});

export const addSpecialRequestSuccess = (specialRequest) => ({
  type: ADDSPECIALREQUEST_SUCCESS,
  payload: { specialRequest },
});

export const addSpecialRequestBegin = () => ({
  type: ADDSPECIALREQUEST_BEGIN,
  payload: {},
});

export const addSpecialRequestFailure = (error) => ({
  type: ADDSPECIALREQUEST_FAILURE,
  payload: { error },
});
export const submitProfileSuccess = (submitProfile) => ({
  type: SUBMITPROFILE_SUCCESS,
  payload: { submitProfile },
});

export const submitProfileBegin = () => ({
  type: SUBMITPROFILE_BEGIN,
  payload: {},
});

export const submitProfileFailure = (error) => ({
  type: SUBMITPROFILE_FAILURE,
  payload: { error },
});

export const getAllSpecialRequestSuccess = (allSpecialRequest) => ({
  type: GETALLSPECIALREQUEST_SUCCESS,
  payload: { allSpecialRequest },
});

export const getAllSpecialRequestBegin = () => ({
  type: GETALLSPECIALREQUEST_BEGIN,
  payload: {},
});

export const getAllSpecialRequestFailure = (error) => ({
  type: GETALLSPECIALREQUEST_FAILURE,
  payload: { error },
});

export const getProfileSubmittersSuccess = (profileSubmitters) => ({
  type: GETPROFILESUBMITTERS_SUCCESS,
  payload: { profileSubmitters },
});

export const getProfileSubmittersBegin = () => ({
  type: GETPROFILESUBMITTERS_BEGIN,
  payload: {},
});

export const getProfileSubmittersFailure = (error) => ({
  type: GETPROFILESUBMITTERS_FAILURE,
  payload: { error },
});

export const createWalletSuccess = (wallet) => ({
  type: CREATEWALLET_SUCCESS,
  payload: { wallet },
});

export const createWalletBegin = () => ({
  type: CREATEWALLET_BEGIN,
  payload: {},
});

export const createWalletFailure = (error) => ({
  type: CREATEWALLET_FAILURE,
  payload: { error },
});
export const creditAccountSuccess = (creditAccount) => ({
  type: CREDITACCOUNT_SUCCESS,
  payload: { creditAccount },
});

export const creditAccountBegin = () => ({
  type: CREDITACCOUNT_BEGIN,
  payload: {},
});

export const creditAccountFailure = (error) => ({
  type: CREDITACCOUNT_FAILURE,
  payload: { error },
});

export const walletInfoSuccess = (walletInfo) => ({
  type: WALLETINFO_SUCCESS,
  payload: { walletInfo },
});

export const walletInfoBegin = () => ({
  type: WALLETINFO_BEGIN,
  payload: {},
});

export const walletInfoFailure = (error) => ({
  type: WALLETINFO_FAILURE,
  payload: { error },
});
export const walletTransactionsSuccess = (walletTrans) => ({
  type: WALLETTRANSACTIONS_SUCCESS,
  payload: { walletTrans },
});

export const walletTransactionsBegin = () => ({
  type: WALLETTRANSACTIONS_BEGIN,
  payload: {},
});

export const walletTransactionsFailure = (error) => ({
  type: WALLETTRANSACTIONS_FAILURE,
  payload: { error },
});
export const fundWalletWithCardSuccess = (walletWithCard) => ({
  type: FUNDWALLETWITHCARD_SUCCESS,
  payload: { walletWithCard },
});

export const fundWalletWithCardBegin = () => ({
  type: FUNDWALLETWITHCARD_BEGIN,
  payload: {},
});

export const fundWalletWithCardFailure = (error) => ({
  type: FUNDWALLETWITHCARD_FAILURE,
  payload: { error },
});

export const fundWalletWithBTCSuccess = (walletWithBtc) => ({
  type: FUNDWALLETWITHBTC_SUCCESS,
  payload: { walletWithBtc },
});

export const fundWalletWithBTCBegin = () => ({
  type: FUNDWALLETWITHBTC_BEGIN,
  payload: {},
});

export const fundWalletWithBTCFailure = (error) => ({
  type: FUNDWALLETWITHBTC_FAILURE,
  payload: { error },
});

export const withdrawToBTCFromWalletSuccess = (withdrawBtcFromWallet) => ({
  type: WITHDRAWBTCFROMWALLET_SUCCESS,
  payload: { withdrawBtcFromWallet },
});

export const withdrawToBTCFromWalletBegin = () => ({
  type: WITHDRAWBTCFROMWALLET_BEGIN,
  payload: {},
});

export const withdrawToBTCFromWalletFailure = (error) => ({
  type: WITHDRAWBTCFROMWALLET_FAILURE,
  payload: { error },
});

export const approveBTCTransactionSuccess = (approveBTCTransaction) => ({
  type: APPROVEBTCTRANSACTION_SUCCESS,
  payload: { approveBTCTransaction },
});

export const setGenderSuccess = (setGender) => ({
  type: SETGENDER_SUCCESS,
  payload: { setGender },
});

export const setPhotoSuccess = (setPhoto) => ({
  type: SETPHOTO_SUCCESS,
  payload: { setPhoto },
});

export const setLocationSuccess = (setLocation) => ({
  type: SETLOCATION_SUCCESS,
  payload: { setLocation },
});

export const setOriginSuccess = (setOrigin) => ({
  type: SETORIGIN_SUCCESS,
  payload: { setOrigin },
});

export const setSeekSuccess = (setSeek) => ({
  type: SETSEEK_SUCCESS,
  payload: { setSeek },
});

export const setReligionSuccess = (setReligion) => ({
  type: SETRELIGION_SUCCESS,
  payload: { setReligion },
});

export const setOccupationSuccess = (setOccupation) => ({
  type: SETOCCUPATION_SUCCESS,
  payload: { setOccupation },
});

export const setInterestInSuccess = (setInterestIn) => ({
  type: SETINTERESTIN_SUCCESS,
  payload: { setInterestIn },
});

export const setNameSuccess = (setFullName) => ({
  type: SETNAME_SUCCESS,
  payload: { setFullName },
});

export const setHobbiesSuccess = (setHobbies) => ({
  type: SETHOBBIES_SUCCESS,
  payload: { setHobbies },
});

export const setEmailSuccess = (setEmail) => ({
  type: SETEMAIL_SUCCESS,
  payload: { setEmail },
});

export const setAuthSuccess = (setAuth) => ({
  type: SETAUTH_SUCCESS,
  payload: { setAuth },
});

export const setDOBSuccess = (dob) => ({
  type: SETDOB_SUCCESS,
  payload: { dob },
});

export const approveBTCTransactionBegin = () => ({
  type: APPROVEBTCTRANSACTION_BEGIN,
  payload: {},
});

export const approveBTCTransactionFailure = (error) => ({
  type: APPROVEBTCTRANSACTION_FAILURE,
  payload: { error },
});

export async function apiReq(
  endpoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  const getTokenHeader = await getHeaders();
  headers = {
    ...getTokenHeader,
    ...headers,
  };

  if (method === "get" || method === "delete") {
    data = {
      ...requestOptions,
      ...data,
      headers,
    };
  }
  // try {
  console.log(
    "ITS CALLED",
    "url:",
    endpoint,
    "data: ",
    data,
    "method: ",
    method,
    "headers",
    { headers }
  );
  if (data?.token) {
    endpoint = `${endpoint}?token=${data.token}`;
  }
  const result = await axios[method](endpoint, data, { headers });
  console.log("API RESULT: ", result);
  if (result) {
    const { data } = result;
    console.log("first data check: ", data);
    return data;
    // console.log("another check on data: ", data);
  }
  // } catch (err) {
  //   console.log("ERROR OCCURRED!", err)
  // if (err.response.data.success === false) return err.response.data;
  // if (err && err.response && err.response.status == 401) {
  //   // clearUserData();
  //   // dispatch(clearState());
  //   // dispatch(noInternet());
  // }

  // return err;
  // }
}

export function apiPost(endpoint, data, headers = {}) {
  return apiReq(endpoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export async function getItem(key) {
  let result = await AsyncStorage.getItem(key);
  result = JSON.parse(result);
  return result;
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorage(key) {
  return AsyncStorage.clear();
}

export async function setUserData(data) {
  data = JSON.stringify(data);
  return await AsyncStorage.setItem("userData", data);
}

export async function getUserData() {
  let result = await AsyncStorage.getItem("userData");
  result = JSON.parse(result);
  return result;
}
export async function clearUserData() {
  return AsyncStorage.removeItem("userData");
}

const utils = {
  setAuthSuccess,
  setInterestInSuccess,
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

  createAccountDetailsBegin,
  createAccountDetailsFailure,
  createAccountDetailsSuccess,

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

  filterBegin,
  filterFailure,
  filterSuccess,

  likeBegin,
  likeFailure,
  likeSuccess,

  feedsBegin,
  feedsFailure,
  feedsSuccess,

  sendMessageBegin,
  sendMessageFailure,
  sendMessageSuccess,

  getMyChattersBegin,
  getMyChattersFailure,
  getMyChattersSuccess,

  myMessagesBegin,
  myMessagesFailure,
  myMessagesSuccess,

  matchProfileBegin,
  matchProfileFailure,
  matchProfileSuccess,

  swipeBegin,
  swipeFailure,
  swipeSuccess,

  dislikeBegin,
  dislikeFailure,
  dislikeSuccess,

  searchUserBegin,
  searchUserFailure,
  searchUserSuccess,

  getMyLikesBegin,
  getMyLikesFailure,
  getMyLikesSuccess,

  buyGiftBegin,
  buyGiftFailure,
  buyGiftSuccess,

  getAllGiftBegin,
  getAllGiftFailure,
  getAllGiftSuccess,

  sellGiftBegin,
  sellGiftFailure,
  sellGiftSuccess,

  getAllMyGiftBegin,
  getAllMyGiftFailure,
  getAllMyGiftSuccess,

  getMyGiftTokenBegin,
  getMyGiftTokenFailure,
  getMyGiftTokenSuccess,

  sendGiftBegin,
  sendGiftFailure,
  sendGiftSuccess,

  getMyGiftBegin,
  getMyGiftFailure,
  getMyGiftSuccess,

  addHobbyBegin,
  addHobbyFailure,
  addHobbySuccess,

  getHobbiesBegin,
  getHobbiesFailure,
  getHobbiesSuccess,

  getHobbiesByCategoryBegin,
  getHobbiesByCategoryFailure,
  getHobbiesByCategorySuccess,

  getHobbiesByUserIdBegin,
  getHobbiesByUserIdFailure,
  getHobbiesByUserIdSuccess,

  addHobbyByCategoryBegin,
  addHobbyByCategoryFailure,
  addHobbyByCategorySuccess,

  sendMessageBegin,
  sendMessageFailure,
  sendMessageSuccess,

  myMessagesBegin,
  myMessagesFailure,
  myMessagesSuccess,

  viewNotificationBegin,
  viewNotificationFailure,
  viewNotificationSuccess,

  getNotificationBegin,
  getNotificationFailure,
  getNotificationSuccess,

  joinRoomBegin,
  joinRoomFailure,
  joinRoomSuccess,

  queueSmsBegin,
  queueSmsFailure,
  queueSmsSuccess,

  sendSmsBegin,
  sendSmsFailure,
  sendSmsSuccess,

  sendQueuedSmsBegin,
  sendQueuedSmsFailure,
  sendQueuedSmsSuccess,

  addSpecialRequestBegin,
  addSpecialRequestFailure,
  addSpecialRequestSuccess,

  submitProfileBegin,
  submitProfileFailure,
  submitProfileSuccess,

  getAllSpecialRequestBegin,
  getAllSpecialRequestFailure,
  getAllSpecialRequestSuccess,

  getProfileSubmittersBegin,
  getProfileSubmittersFailure,
  getProfileSubmittersSuccess,

  createWalletBegin,
  createWalletFailure,
  createWalletSuccess,

  creditAccountBegin,
  creditAccountFailure,
  creditAccountSuccess,

  walletInfoBegin,
  walletInfoFailure,
  walletInfoSuccess,

  walletTransactionsBegin,
  walletTransactionsFailure,
  walletTransactionsSuccess,

  fundWalletWithCardBegin,
  fundWalletWithCardFailure,
  fundWalletWithCardSuccess,

  fundWalletWithBTCBegin,
  fundWalletWithBTCFailure,
  fundWalletWithBTCSuccess,

  withdrawToBTCFromWalletBegin,
  withdrawToBTCFromWalletFailure,
  withdrawToBTCFromWalletSuccess,

  approveBTCTransactionBegin,
  approveBTCTransactionFailure,
  approveBTCTransactionSuccess,

  loginSuccess,
  loginBegin,
  loginFailure,

  setOccupationSuccess,
};

export default utils;

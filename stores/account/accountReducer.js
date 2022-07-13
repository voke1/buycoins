import * as authActionTypes from "../../constants/types";

const initialState = {
  authentication: false,
  user: {},
  error: null,
  loading: false,
  filter: {},
  profile: "",
  dashboard: "",
  logout: "",
  dashboardById: "",
  citiesState: "",
  statesCountries: "",
  verifyToken: "",
  updateProfile: "",
  listOfCountries: "",
  upload: "",
  accountProfile: "",
  generateToken: "",
  zodiacSign: "",
  gmailSignUp: "",
  facebookSignUp: "",
  authorizeInstagram: "",
  gmailLogin: "",
  facebookLogin: "",
  phoneAccount: "",
  pauseProfile: "",
  lastActive: "",
  allUsers: "",
  upgradeAccount: "",
  boostProfile: "",
  healthCheck: "",
  loggedInUser: "",
  userDetails: "",
  photo: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.HEALTHCHECK_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.HEALTHCHECK_SUCCESS:
      return {
        ...state,
        healthCheck: action.payload.healthCheck,
        loading: false,
      };
    case authActionTypes.HEALTHCHECK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.BOOSTPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.BOOSTPROFILE_SUCCESS:
      return {
        ...state,
        boostProfile: action.payload.boostProfile,
        loading: false,
      };
    case authActionTypes.BOOSTPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETALLUSERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETALLUSERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload.allUsers,
        loading: false,
      };
    case authActionTypes.GETALLUSERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.SHOWLASTACTIVE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SHOWLASTACTIVE_SUCCESS:
      return {
        ...state,
        lastActive: action.payload.lastActive,
        loading: false,
      };
    case authActionTypes.SHOWLASTACTIVE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.PAUSEPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.PAUSEPROFILE_SUCCESS:
      return {
        ...state,
        pauseProfile: action.payload.pauseProfile,
        loading: false,
      };
    case authActionTypes.PAUSEPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.CREATEPHONEACCOUNT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATEPHONEACCOUNT_SUCCESS:
      return {
        ...state,
        phoneAccount: action.payload.phoneAccount,
        loading: false,
      };
    case authActionTypes.CREATEPHONEACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.FACEBOOKLOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FACEBOOKLOGIN_SUCCESS:
      return {
        ...state,
        facebookLogin: action.payload.facebookLogin,
        loading: false,
      };
    case authActionTypes.FACEBOOKLOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GMAILLOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GMAILLOGIN_SUCCESS:
      return {
        ...state,
        gmailLogin: action.payload.gmailLogin,
        loading: false,
      };
    case authActionTypes.GMAILLOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GMAILSIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GMAILSIGNUP_SUCCESS:
      return {
        ...state,
        gmailSignUp: action.payload.gmailSignUp,
        loading: false,
      };
    case authActionTypes.GMAILSIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.AUTHORIZEINSTAGRAM_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.AUTHORIZEINSTAGRAM_SUCCESS:
      return {
        ...state,
        authorizeInstagram: action.payload.authorizeInstagram,
        loading: false,
      };
    case authActionTypes.AUTHORIZEINSTAGRAM_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.FACEBOOKSIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FACEBOOKSIGNUP_SUCCESS:
      return {
        ...state,
        facebookSignUp: action.payload.facebookSignUp,
        loading: false,
      };
    case authActionTypes.FACEBOOKSIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GENERATETOKEN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GENERATETOKEN_SUCCESS:
      return {
        ...state,
        generateToken: action.payload.generateToken,
        loading: false,
      };
    case authActionTypes.GENERATETOKEN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.ZODIACSIGN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.ZODIACSIGN_SUCCESS:
      return {
        ...state,
        zodiacSign: action.payload.zodiacSign,
        loading: false,
      };
    case authActionTypes.ZODIACSIGN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.CREATEACCOUNTDETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATEACCOUNTDETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        loading: false,
      };
    case authActionTypes.CREATEACCOUNTDETAILS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.CREATEACCOUNTPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATEACCOUNTPROFILE_SUCCESS:
      return {
        ...state,
        accountProfile: action.payload.accountProfile,
        loading: false,
      };
    case authActionTypes.CREATEACCOUNTPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.UPLOAD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        upload: action.payload.upload,
        loading: false,
      };
    case authActionTypes.UPLOAD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETLISTOFCOUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETLISTOFCOUNTRIES_SUCCESS:
      return {
        ...state,
        listOfCountries: action.payload.listOfCountries,
        loading: false,
      };
    case authActionTypes.GETLISTOFCOUNTRIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.UPDATEPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.UPDATEPROFILE_SUCCESS:
      return {
        ...state,
        updateProfile: action.payload.updateProfile,
        loading: false,
      };
    case authActionTypes.UPDATEPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.VERIFYTOKEN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.VERIFYTOKEN_SUCCESS:
      return {
        ...state,
        verifyToken: action.payload.verifyToken,
        loading: false,
      };
    case authActionTypes.VERIFYTOKEN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETSTATESCOUNTRY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETSTATESCOUNTRY_SUCCESS:
      return {
        ...state,
        statesCountries: action.payload.statesCountries,
        loading: false,
      };
    case authActionTypes.GETSTATESCOUNTRY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETCITIESSTATE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETCITIESSTATE_SUCCESS:
      return {
        ...state,
        citiesState: action.payload.citiesState,
        loading: false,
      };
    case authActionTypes.GETCITIESSTATE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.DASHBOARDBYID_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.DASHBOARDBYID_SUCCESS:
      return {
        ...state,
        dashboardById: action.payload.dashboardById,
        loading: false,
      };
    case authActionTypes.DASHBOARDBYID_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.DASHBOARD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: action.payload.dashboard,
        loading: false,
      };
    case authActionTypes.DASHBOARD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload.loggedInUser,
        loading: false,
        authentication: true,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        logout: action.payload.logout,
        loading: false,
      };
    case authActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.FILTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FILTER_SUCCESS:
      return {
        ...state,
        filter: action.payload.filter,
        loading: false,
      };
    case authActionTypes.FILTER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.SETGENDER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...{ gender: action.payload.setGender } },
        loading: false,
      };

    case authActionTypes.SETDOB_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...{ birthDate: action.payload.dob } },
        loading: false,
      };

    case authActionTypes.SETEMAIL_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...{ email: action.payload.setEmail } },
        loading: false,
      };

    case authActionTypes.SETHOBBIES_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...{ hobbies: action.payload.setHobbies },
        },
        loading: false,
      };

    case authActionTypes.SETNAME_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...{ fullName: action.payload.setFullName } },
        loading: false,
      };

    case authActionTypes.SETRELIGION_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...{ religion: action.payload.setReligion },
        },
        loading: false,
      };

    case authActionTypes.SETOCCUPATION_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...{ professions: action.payload.setOccupation },
        },
        loading: false,
      };

    case authActionTypes.SETINTERESTIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...{ interestedIn: action.payload.setInterestIn },
        },
        loading: false,
      };

    case authActionTypes.SETSEEK_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...{ relationshipType: action.payload.setSeek },
        },
        loading: false,
      };

    case authActionTypes.SETAUTH_SUCCESS:
      return {
        ...state,
        authentication: true,
        loading: false,
      };

    case authActionTypes.SETORIGIN_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload.setOrigin },
        loading: false,
      };

    case authActionTypes.SETLOCATION_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload.setLocation },
        loading: false,
      };

    case authActionTypes.SETPHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload.setPhoto,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;

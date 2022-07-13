import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  specialRequest: "",
  allSpecialRequest: "",
  profileSubmitters: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.ADDSPECIALREQUEST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.ADDSPECIALREQUEST_SUCCESS:
      return {
        ...state,
        specialRequest: action.payload.specialRequest,
        loading: false,
      };
    case authActionTypes.ADDSPECIALREQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SUBMITPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SUBMITPROFILE_SUCCESS:
      return {
        ...state,
        summitProfile: action.payload.summitProfile,
        loading: false,
      };
    case authActionTypes.SUBMITPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETALLSPECIALREQUEST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETALLSPECIALREQUEST_SUCCESS:
      return {
        ...state,
        allSpecialRequest: action.payload.allSpecialRequest,
        loading: false,
      };
    case authActionTypes.GETALLSPECIALREQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.GETPROFILESUBMITTERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETPROFILESUBMITTERS_SUCCESS:
      return {
        ...state,
        profileSubmitters: action.payload.profileSubmitters,
        loading: false,
      };
    case authActionTypes.GETPROFILESUBMITTERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;

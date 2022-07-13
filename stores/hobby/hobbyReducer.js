import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  hobby: "",
  getHobbies: "",
  hobbiesByCategory: "",
  hobbiesByUserId: "",
  hobbiesCategory: "",

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.ADDHOBBY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.ADDHOBBY_SUCCESS:
      return {
        ...state,
        hbbby: action.payload.hbbby,
        loading: false,
      };
    case authActionTypes.ADDHOBBY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.GETHOBBIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETHOBBIES_SUCCESS:
      return {
        ...state,
        getHobbies: action.payload.getHobbies,
        loading: false,
      };
    case authActionTypes.GETHOBBIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETHOBBIESBYCATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETHOBBIESBYCATEGORY_SUCCESS:
      return {
        ...state,
        hobbiesByCategory: action.payload.hobbiesByCategory,
        loading: false,
      };
    case authActionTypes.GETHOBBIESBYCATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETHOBBIESBYUSERID_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETHOBBIESBYUSERID_SUCCESS:
      return {
        ...state,
        hobbiesByUserId: action.payload.hobbiesByUserId,
        loading: false,
      };
    case authActionTypes.GETHOBBIESBYUSERID_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.ADDHOBBYBYCATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.ADDHOBBYBYCATEGORY_SUCCESS:
      return {
        ...state,
        hobbyByCategory: action.payload.hobbyByCategory,
        loading: false,
      };
    case authActionTypes.ADDHOBBYBYCATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETHOBBIESCATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETHOBBIESCATEGORY_SUCCESS:
      return {
        ...state,
        hobbiesCategory: action.payload.hobbiesCategory,
        loading: false,
      };
    case authActionTypes.GETHOBBIESCATEGORY_FAILURE:
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

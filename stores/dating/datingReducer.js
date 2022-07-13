import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  getMyLikes:"",
  searchUser:"",
  dislike:"",
  swipe:"",
  matchProfile:"",
  myMessages:"",
  myChatters:"",
  sendMessage:"",
  feeds:"",
  like:"",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LIKE_SUCCESS:
      return {
        ...state,
        like: action.payload.like,
        loading: false,
      };
    case authActionTypes.LIKE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.FEEDS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FEEDS_SUCCESS:
      return {
        ...state,
        feeds: action.payload.feeds,
        loading: false,
      };
    case authActionTypes.FEEDS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SENDMESSAGE_DATING_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SENDMESSAGE_DATING_SUCCESS:
      return {
        ...state,
        sendMessage: action.payload.sendMessage,
        loading: false,
      };
    case authActionTypes.SENDMESSAGE_DATING_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETMYCHATTERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETMYCHATTERS_SUCCESS:
      return {
        ...state,
        myChatters: action.payload.myChatters,
        loading: false,
      };
    case authActionTypes.GETMYCHATTERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.MYMESSAGES_DATING_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.MYMESSAGES_DATING_SUCCESS:
      return {
        ...state,
        myMessages: action.payload.myMessages,
        loading: false,
      };
    case authActionTypes.MYMESSAGES_DATING_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.MATCHPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.MATCHPROFILE_SUCCESS:
      return {
        ...state,
        matchProfile: action.payload.matchProfile,
        loading: false,
      };
    case authActionTypes.MATCHPROFILE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.SWIPE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SWIPE_SUCCESS:
      return {
        ...state,
        swipe: action.payload.swipe,
        loading: false,
      };
    case authActionTypes.SWIPE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.DISLIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.DISLIKE_SUCCESS:
      return {
        ...state,
        dislike: action.payload.dislike,
        loading: false,
      };
    case authActionTypes.DISLIKE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.SEARCHUSER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SEARCHUSER_SUCCESS:
      return {
        ...state,
        searchUser: action.payload.searchUser,
        loading: false,
      };
    case authActionTypes.SEARCHUSER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.GETMYLIKES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GETMYLIKES_SUCCESS:
      return {
        ...state,
        getMyLikes: action.payload.getMyLikes,
        loading: false,
      };
    case authActionTypes.GETMYLIKES_FAILURE:
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

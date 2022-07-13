import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
  approveBTCTransaction: "",
  withdrawBtcFromWallet: "",
  walletWithBtc: "",
  walletWithCard: "",
  walletTrans: "",
  walletInfo: "",
  creditAccount: "",
  wallet: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.CREATEWALLET_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATEWALLET_SUCCESS:
      return {
        ...state,
        wallet: action.payload.wallet,
        loading: false,
      };
    case authActionTypes.CREATEWALLET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.CREDITACCOUNT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREDITACCOUNT_SUCCESS:
      return {
        ...state,
        creditAccount: action.payload.creditAccount,
        loading: false,
      };
    case authActionTypes.CREDITACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.WALLETINFO_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.WALLETINFO_SUCCESS:
      return {
        ...state,
        walletInfo: action.payload.walletInfo,
        loading: false,
      };
    case authActionTypes.WALLETINFO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.WALLETTRANSACTIONS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.WALLETTRANSACTIONS_SUCCESS:
      return {
        ...state,
        walletTrans: action.payload.walletTrans,
        loading: false,
      };
    case authActionTypes.WALLETTRANSACTIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.FUNDWALLETWITHCARD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FUNDWALLETWITHCARD_SUCCESS:
      return {
        ...state,
        walletWithCard: action.payload.walletWithCard,
        loading: false,
      };
    case authActionTypes.FUNDWALLETWITHCARD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.FUNDWALLETWITHBTC_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.FUNDWALLETWITHBTC_SUCCESS:
      return {
        ...state,
        walletWithBtc: action.payload.walletWithBtc,
        loading: false,
      };
    case authActionTypes.FUNDWALLETWITHBTC_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.WITHDRAWTOBTCFROMWALLET_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.WITHDRAWTOBTCFROMWALLET_SUCCESS:
      return {
        ...state,
        withdrawBtcFromWallet: action.payload.withdrawBtcFromWallet,
        loading: false,
      };
    case authActionTypes.WITHDRAWTOBTCFROMWALLET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case authActionTypes.APPROVEBTCTRANSACTION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.APPROVEBTCTRANSACTION_SUCCESS:
      return {
        ...state,
        approveBTCTransaction: action.payload.approveBTCTransaction,
        loading: false,
      };
    case authActionTypes.APPROVEBTCTRANSACTION_FAILURE:
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

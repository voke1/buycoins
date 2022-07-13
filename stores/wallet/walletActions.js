import axios from "axios";
import {
  ////Wallet
  CREATEWALLET,
  CREDITACCOUNT,
  WALLETINFO,
  WALLETTRANSACTIONS,
  FUNDWALLETWITHCARD,
  FUNDWALLETWITHBTC,
  WITHDRAWTOBTCFROMWALLET,
  APPROVEBTCTRANSACTION,
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
  createWalletBegin,
  createWalletFailure,
  createWalletSuccess,
  walletInfoBegin,
  walletInfoFailure,
  walletInfoSuccess,
  walletTransactionsBegin,
  walletTransactionsFailure,
  walletTransactionsSuccess,
} = utils;

export function createWallet(data) {
  return async (dispatch) => {
    dispatch(createWalletBegin());
    try {
      const result = await apiPost(CREATEWALLET, data);
      console.log("CREATE WALLET: ", result);
      if (result.success) dispatch(createWalletSuccess(result.data));
      if (!result.success) dispatch(createWalletFailure(result.data));
      return result;
    } catch (err) {
      dispatch(createWalletFailure(err.response.data));
      return err.response;
    }
  };
}

export function creditAccount(data) {
  return async (dispatch) => {
    dispatch(creditAccountBegin());
    try {
      const result = await apiPost(CREDITACCOUNT, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(creditAccountSuccess(result.data));
      if (!result.success) dispatch(creditAccountFailure(result.data));
      return result;
    } catch (err) {
      dispatch(creditAccountFailure(err.response.data));
      return err.response;
    }
  };
}

export function walletInfo(data) {
  return async (dispatch) => {
    dispatch(walletInfoBegin());
    try {
      const result = await apiGet(WALLETINFO, data);
      console.log("WALLETINFO: ", result);
      if (result.responseMessage == "Success") dispatch(walletInfoSuccess(result.wallet));
      if (!result.success) dispatch(walletInfoFailure(result));
      return result;
    } catch (err) {
      dispatch(walletInfoFailure(err.response.data));
      return err.response;
    }
  };
}

export function walletTransactions(data) {
  return async (dispatch) => {
    dispatch(walletTransactionsBegin());
    try {
      const result = await apiPost(WALLETTRANSACTIONS, data);
      console.log("WALLET TRANSACTION ", result);
      if (result) dispatch(walletTransactionsSuccess(result.data));
      if (!result.success) dispatch(walletTransactionsFailure(result.data));
      return result;
    } catch (err) {
      dispatch(walletTransactionsFailure(err.response.data));
      return err.response;
    }
  };
}

export function fundWalletWithCard(data) {
  return async (dispatch) => {
    dispatch(fundWalletWithCardBegin());
    try {
      const result = await apiPost(FUNDWALLETWITHCARD, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(fundWalletWithCardSuccess(result.data));
      if (!result.success) dispatch(fundWalletWithCardFailure(result.data));
      return result;
    } catch (err) {
      dispatch(fundWalletWithCardFailure(err.response.data));
      return err.response;
    }
  };
}

export function fundWalletWithBTC(data) {
  return async (dispatch) => {
    dispatch(fundWalletWithBTCBegin());
    try {
      const result = await apiPost(FUNDWALLETWITHBTC, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(fundWalletWithBTCSuccess(result.data));
      if (!result.success) dispatch(fundWalletWithBTCFailure(result.data));
      return result;
    } catch (err) {
      dispatch(fundWalletWithBTCFailure(err.response.data));
      return err.response;
    }
  };
}

export function withdrawToBTCFromWallet(data) {
  return async (dispatch) => {
    dispatch(withdrawToBTCFromWalletBegin());
    try {
      const result = await apiPost(WITHDRAWTOBTCFROMWALLET, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(withdrawToBTCFromWalletSuccess(result.data));
      if (!result.success)
        dispatch(withdrawToBTCFromWalletFailure(result.data));
      return result;
    } catch (err) {
      dispatch(withdrawToBTCFromWalletFailure(err.response.data));
      return err.response;
    }
  };
}

export function approveBTCTransaction(data) {
  return async (dispatch) => {
    dispatch(approveBTCTransactionBegin());
    try {
      const result = await apiPost(APPROVEBTCTRANSACTION, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(approveBTCTransactionSuccess(result.data));
      if (!result.success) dispatch(approveBTCTransactionFailure(result.data));
      return result;
    } catch (err) {
      dispatch(approveBTCTransactionFailure(err.response.data));
      return err.response;
    }
  };
}

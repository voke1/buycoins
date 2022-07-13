import { combineReducers } from "redux";
import tabReducer from "./tab/tabReducer";
import accountReducer from "./account/accountReducer";
import datingReducer from "./dating/datingReducer";
import giftReducer from "./gift/giftReducer";
import hobbyReducer from "./hobby/hobbyReducer";
import messageReducer from "./message/messageReducer";
import notificationReducer from "./notification/notificationReducer";
import smsReducer from "./sms/smsReducer";
import specialRequestReducer from "./specialRequest/specialRequestReducer";
import walletReducer from "./wallet/walletReducer";
import { CLEAR_REDUX_STATE } from "../constants/types";

const appReducer = combineReducers({
  tabReducer,
  accountReducer,
  datingReducer,
  giftReducer,
  hobbyReducer,
  messageReducer,
  notificationReducer,
  smsReducer,
  specialRequestReducer,
  walletReducer,
});

const rootReducer = (state, action) => {
  if (action.type == CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;


import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import Register from "./screens/Authentication/Register";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./stores/store";
import {Routes} from "./navigation/route";
import { getUserData, setUserData } from "./utils/Utils";
import { saveUserData } from "./stores/account/accountActions";
import { fromLeft, fadeIn, fadeOut } from "react-navigation-transitions";

// const Stack = createStackNavigator();

export const App = () => {
  // const [userLoggedIn, setUserLoggedIn] = React.useState("");
  React.useEffect(() => {
    // let count = true;

    // if (count) {
    //   (async () => {
    //     const userData = await getUserData();
    //     console.log("user data App.js", userData);
    //     if (!!userData) {
    //       console.log("got here");
    //       saveUserData(userData);
    //       // console.log("SAVEDATA RESULT: ", result);
    //     }
    //   })();
    SplashScreen.hide();
    // }

    // return () => {
    //   count = false;
    // };
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

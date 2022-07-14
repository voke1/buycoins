import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Transactions } from "../screens";
const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function Routes() {
  const [userLoggedIn, setUserLoggedIn] = React.useState("");

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#9A7BD5"
        networkActivityIndicatorVisible={true}
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            const opacity = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            return { cardStyle: { opacity } };
          },
        }}
      >
        <Stack.Screen name="TransactionScreen" component={Transactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };

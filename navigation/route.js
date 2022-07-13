import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Notification } from "../screens";
const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function Routes() {
  const [userLoggedIn, setUserLoggedIn] = React.useState("");

  return (
    <NavigationContainer>
      {/* <StatusBar
        barStyle="light-content"
        // dark-content, light-content and default
        hidden={true}
        //To hide statusBar
        // backgroundColor={COLORS.primary}
        backgroundColor="#9932cc"
        //Background color of statusBar only works for Android
        // translucent={true}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      /> */}

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
        <Stack.Screen name="NotificationScreen" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {  Routes };

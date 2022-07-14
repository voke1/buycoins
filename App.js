import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import Register from "./screens/Authentication/Register";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { Routes } from "./navigation/route";
import { getUserData, setUserData } from "./utils/Utils";
import { saveUserData } from "./stores/account/accountActions";
import { fromLeft, fadeIn, fadeOut } from "react-navigation-transitions";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GET_TRANSACTIONS } from "./graphql/queries";
// const Stack = createStackNavigator();

export const App = () => {
  // const [userLoggedIn, setUserLoggedIn] = React.useState("");
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({
      uri: "https://musical-osprey-54.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "ek9wOMeIhr9bRZTIQqkkZjAkGcN6WMGgd5pd8BFSefRAfGk4g4Yg69R5TasqTLWf"
      }
    }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

 

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;

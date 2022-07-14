import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from "react";
import SplashScreen from "react-native-splash-screen";
import { API_BASE_URL, token } from "./constants/url";
import { Routes } from "./navigation/route";


export const App = () => {
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
      uri: API_BASE_URL,
      headers: {
        "x-hasura-admin-secret": token
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

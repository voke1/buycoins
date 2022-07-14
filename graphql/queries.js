import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query {
    getTransactions {
      id
      firstName
      email
      password
    }
  }
`;

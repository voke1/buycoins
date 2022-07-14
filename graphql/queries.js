import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;

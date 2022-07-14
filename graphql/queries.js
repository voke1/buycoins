import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
         query {
           allTransactions {
             id
             name
             status
             type
           }
         }
       `;

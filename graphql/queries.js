import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
         query {
           Transactions {
             id
             name
             type
             status
             date
           }
         }
       `;

const {gql} = require('apollo-server-express');


const transactionQuery = gql`
    extend type Query {
        transactions: [Transaction],
        TransactionById(id:ID!): Transaction,
    },

    extend type Mutation {
     
    }

`;



module.exports = transactionQuery;

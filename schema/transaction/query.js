const {gql} = require('apollo-server-express');

// TODO sorting by index, blockNumber
// TODO search by transactionHash, address, block,

const transactionQuery = gql`
    extend type Query {
        transactions: [Transaction],
        transactionById(id:ID!): Transaction,
        transactionByTransactionHash(transactionHash:String!): [Transaction],
        transactionsByAddress(address:String!,soryBy:Sort): [Transaction],
    },
    

`;



module.exports = transactionQuery;

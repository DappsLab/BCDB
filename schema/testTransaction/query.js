const {gql} = require('apollo-server-express');

// TODO sorting by index, blockNumber
// TODO search by transactionHash, address, block,

const testTransactionQuery = gql`
    extend type Query {
        testTransactions: [TestTransaction],
        testTransactionById(id:ID!): TestTransaction,
        testTransactionByTransactionHash(transactionHash:String!): TestTransaction,
        testTransactionsByAddress(address:String!,soryBy:Sort): [TestTransaction],
    },
    

`;



module.exports = testTransactionQuery;

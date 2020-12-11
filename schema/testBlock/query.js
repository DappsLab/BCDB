const {gql} = require('apollo-server-express');

const blockQuery = gql`
    extend type Query {
        testBlocks: [TestBlock],
        testBlockById(id:ID!):TestBlock,
        testBlockByNumber(blockNumber:Int!):TestBlock,
        testBlockByHash(blockHash:String!):TestBlock,
    },
    
    
`;



module.exports = blockQuery;

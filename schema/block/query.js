const {gql} = require('apollo-server-express');

const blockQuery = gql`
    extend type Query {
        blocks: [Block],
        blockById(id:ID!):Block,
        blockByNumber(blockNumber:Int!):Block,
        blockByHash(blockHash:String!):Block,
    },
    
    
`;



module.exports = blockQuery;

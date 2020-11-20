const {gql} = require('apollo-server-express');

const blockQuery = gql`
    extend type Query {
        blocks: [Block],
        blockById(id:ID!):Block,
    },
    
    extend type Mutation {

    }
    
`;



module.exports = blockQuery;

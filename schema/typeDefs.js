const { mergeTypeDefs } = require('@graphql-tools/merge');

const blockQuery = require('./block/query.js')
const blockTypeDefs =require('./block/type')
const baseTypeDefs =require('./baseDefs.js')
const transactionTypeDefs =require('./transaction/type.js')
const transactionQuery = require('./transaction/query.js')


const typeDefs = [
    baseTypeDefs,
    blockTypeDefs,
    blockQuery,
    transactionQuery,
    transactionTypeDefs,
];

module.exports = mergeTypeDefs(typeDefs);

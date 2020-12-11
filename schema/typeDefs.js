const { mergeTypeDefs } = require('@graphql-tools/merge');

const baseTypeDefs =require('./baseDefs.js')
const blockQuery = require('./block/query.js')
const blockTypeDefs =require('./block/type')
const transactionTypeDefs =require('./transaction/type.js')
const transactionQuery = require('./transaction/query.js')
const testBlockQuery = require('./testBlock/query.js')
const testBlockTypeDefs =require('./testBlock/type')
const testTransactionTypeDefs =require('./testTransaction/type.js')
const testTransactionQuery = require('./testTransaction/query.js')



const typeDefs = [
    baseTypeDefs,
    blockTypeDefs,
    blockQuery,
    transactionQuery,
    transactionTypeDefs,
    testBlockQuery,
    testBlockTypeDefs,
    testTransactionTypeDefs,
    testTransactionQuery,
];

module.exports = mergeTypeDefs(typeDefs);

const { mergeResolvers } = require('@graphql-tools/merge');
const blockResolver = require('./block/resolver.js');
const transactionResolver = require('./transaction/resolver.js');
const testBlockResolver = require('./testBlock/resolver');
const testTransactionResolver = require('./testTransaction/resolver');

const resolvers = [
    blockResolver,
    transactionResolver,
    testBlockResolver,
    testTransactionResolver,
];

module.exports = mergeResolvers(resolvers);

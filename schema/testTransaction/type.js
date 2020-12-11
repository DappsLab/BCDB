const {gql} = require('apollo-server-express');


const testTransactionTypeDefs = gql`
    
    type TestTransaction {
        id: ID!,
        transactionHash:String,
        transactionIndex:Int,
        blockHash:String,
        blockNumber:Int,
        from:String,
        to:String,
        gasUsed:Int,
        cumulativeGasUsed:Int,
        contractAddress:String,
        status:Boolean,
        value:String,
        nonce:Int,
        gasPrice:String,
        input:String,
        logsBloom:String,
        logs:[String],
        createdAt: String!,
        updatedAt: String!,
    }
    
`;



module.exports = testTransactionTypeDefs;

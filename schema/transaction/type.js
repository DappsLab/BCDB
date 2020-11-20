const {gql} = require('apollo-server-express');


const transactionTypeDefs = gql`
    
    type Transaction {
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
        logsBloom:String,
        logs:[String]
    }
    
`;


module.exports = transactionTypeDefs;

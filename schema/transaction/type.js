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
        valus:String,
        nonce:Int,
        gasPrice:String,
        input:String,
        logsBloom:String,
        logs:[String],
        createdAt: String!,
        updatedAt: String!,
    }
    
    enum Sort{
        NONCE,
        BLOCK,
        FROM,
        TO,
        VALUE,
        STATUS,
    }
    
`;



module.exports = transactionTypeDefs;

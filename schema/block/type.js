const {gql} = require('apollo-server-express');


const blockTypeDefs = gql`    
    
    type Block {
        id: ID!,
        number:Int,
        hash:String,
        parentHash:String,
        mixHash:String,
        nonce:String,
        sha3Uncles:String,
        logsBloom:String,
        transactionsRoot:String,
        stateRoot:String,
        receiptsRoot:String,
        miner:String,
        difficulty:String,
        totalDifficulty:String,
        extraData:String,
        size:Int,
        gasLimit:Int,
        gasUsed:Int,
        timestamp:Int,
        transactions:[Transaction],
        uncles:[String],
    }

`;



module.exports = blockTypeDefs;

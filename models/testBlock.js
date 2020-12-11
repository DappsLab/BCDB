const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testBlockSchema = new Schema({
    number:Number,
    hash: {
        type:String,
        default:""
    },
    parentHash: {
        type:String,
        default:""
    },
    mixHash: {
        type:String,
        default:""
    },
    nonce: {
        type:String,
        default:""
    },
    sha3Uncles: {
        type:String,
        default:""
    },
    logsBloom: {
        type:String,
        default:""
    },
    transactionsRoot: {
        type:String,
        default:""
    },
    stateRoot: {
        type:String,
        default:""
    },
    receiptsRoot: {
        type:String,
        default:""
    },
    miner: {
        type:String,
        default:""
    },
    difficulty: {
        type:String,
        default:""
    },
    totalDifficulty: {
        type:String,
        default:""
    },
    extraData: {
        type:String,
        default:""
    },
    size: {
        type:Number,
        default:null
    },
    gasLimit: {
        type:Number,
        default:null
    },
    gasUsed: {
        type:Number,
        default:null
    },
    timestamp: {
        type:Number,
        default:null
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'testtransactions',
    }],
    uncles: [{
        type: String,
        default:""
    }]
}, {
    timestamps: true
});



// const User = mongoose.model('users', userSchema);

const TestBlock = mongoose.model('testblocks', testBlockSchema);
export default TestBlock;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionHash: {
        type:String,
        default:""
    },
    transactionIndex: {
        type:Number,
        default:null
    },
    blockHash: {
        type:String,
        default:""
    },
    blockNumber: {
        type:Number,
        default:null
    },
    from: {
        type:String,
        default:""
    },
    to:{
        type:String,
        default:""
    },
    gasUsed: {
        type:Number,
        default:null
    },
    cumulativeGasUsed: {
        type:Number,
        default:null
    },
    contractAddress: {
        type:String,
        default:""
    },
    status: {
        type:Boolean,
        default:false
    },
    logsBloom: {
        type:String,
        default:""
    },
    logs: [{
        type: String,
        default:""
    }]
}, {
    timestamps: true
});



// const User = mongoose.model('users', userSchema);

const Transaction = mongoose.model('transactions', transactionSchema);
export default Transaction;


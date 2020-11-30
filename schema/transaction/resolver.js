const {Transaction} = require('../../models');



let fetchData = ()=>{
    return Transaction.find();
}
let SortBy = (sortBy)=>{
    let SortBy;
    if(sortBy!==""&&sortBy!==undefined){
        if(sortBy==='NONCE'){
            SortBy={nonce: -1}
        }else if(sortBy==='BLOCK'){
            SortBy={blockNumber: -1}
        }else if(sortBy==='DATE'){
            SortBy={createdAt: -1}
        }else if(sortBy==='FROM'){
            SortBy={from: -1}
        }else if(sortBy==='TO'){
            SortBy={to: -1}
        }else if(sortBy==='VALUE'){
            SortBy={value: -1}
        }else if(sortBy==='STATUS'){
            SortBy={status: -1}
        }
    }else {
        SortBy = 0;
    }
    return sortBy;
}

const resolvers = {
    Query: {
        transactions: () => {
            return fetchData()
        },
        transactionById: async (_,args)=>{
            let transaction= await Transaction.findById(args.id);
            console.log("Transaction:",transaction);
            return transaction;
        },
        transactionByTransactionHash:async(_,{transactionHash})=>{
            return await Transaction.findOne({transactionHash:transactionHash});
        },
        transactionsByAddress:async (_,{address,sortBy})=>{
            return await Transaction.find({'$or':[{from:address},{to:address}]}).sort(SortBy(sortBy));
        },

    },
   
}

module.exports = resolvers;

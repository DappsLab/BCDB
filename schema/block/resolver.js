const {Block, Transaction} = require('../../models');

let fetchData = () => {
    return Block.find();
}
let SortBy = (sortBy) => {
    let SortBy;
    if (sortBy !== "" && sortBy !== undefined) {
        if (sortBy === 'NUMBER') {
            SortBy = {number: -1}
        } else if (sortBy === 'DATE') {
            SortBy = {createdAt: -1}
        }
    } else {
        SortBy = 0;
    }
    return sortBy;
}

const resolvers = {
    Block:{
        transactions:async (parent)=>{
            return await Transaction.find({"_id":parent.transactions})
        },
    },
    Query: {
        blocks: () => {
            return fetchData()
        },
        blockById: async (_, {id}) => {
            let block = await Block.findById(id);
            console.log("Block:", block);
            return block;
        },
        blockByNumber: async (_, {blockNumber}) => {
           try{
               let block = await Block.findOne({"number": blockNumber});
               console.log("Block:", block);
               return block;
           }catch(err){
               console.log(err);
           }
        },
        blockByHash: async (_, {blockHash}) => {
            try {
                const block = await Block.findOne({"hash": blockHash});
                console.log("Block:", block);
                return block;
            }catch(err){
                console.log(err);
            }
        },

    },

}

module.exports = resolvers;

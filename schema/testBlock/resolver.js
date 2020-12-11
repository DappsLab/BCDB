const {TestBlock, TestTransaction} = require('../../models');

let fetchData = () => {
    return TestBlock.find();
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
    TestBlock:{
        transactions:async (parent)=>{
            return await TestTransaction.find({"_id":parent.transactions})
        },
    },
    Query: {
        testBlocks: () => {
            return fetchData()
        },
        testBlockById: async (_, {id}) => {
            let block = await TestBlock.findById(id);
            console.log("Block:", block);
            return block;
        },
        testBlockByNumber: async (_, {blockNumber}) => {
           try{
               let block = await TestBlock.findOne({"number": blockNumber});
               console.log("Block:", block);
               return block;
           }catch(err){
               console.log(err);
           }
        },
        testBlockByHash: async (_, {blockHash}) => {
            try {
                const block = await TestBlock.findOne({"hash": blockHash});
                console.log("Block:", block);
                return block;
            }catch(err){
                console.log(err);
            }
        },

    },

}

module.exports = resolvers;

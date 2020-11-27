const {Block} = require('../../models');

let fetchData = () => {
    return Block.find().populate('transactions');
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
               let block = await Block.find({"number": blockNumber}).populate('transactions');
               console.log("Block:", block);
               return block;
           }catch(err){
               console.log(err);
           }
        },
        blockByHash: async (_, {blockHash}) => {
            try {
                const block = await Block.find({"hash": blockHash}).populate('transactions');
                console.log("Block:", block);
                return block;
            }catch(err){
                console.log(err);
            }
        },

    },

}

module.exports = resolvers;

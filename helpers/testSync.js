import {getBlock, getTransaction, getTransactionReceipt} from './TestWeb3Wrapper'
import {TestBlock,TestTransaction} from "../models";
import {subscribeBlock} from "./TestWeb3WebSocket"


export const syncBlockChain = async()=>{

    while(true){
        console.log("inloop")
        let response = await TestBlock.findOne({}).sort('-number')
        let currentBlock = -1;
        console.log("response",response)
        if(response !== null && response!==""){
            currentBlock = response.number;
        }
        let latestBlock= await getBlock('latest')
        console.log("currentBlock",currentBlock)
        if(currentBlock<latestBlock.number){
            console.log("Downloading...")
            await downloadBlockChain(currentBlock+1,latestBlock.number)
        }else if(currentBlock===latestBlock.number){
            console.log("Syncing...")
            await subscribeBlock();
            break;
        }else{

        }
    }

}
export const downloadBlockChain = async (fromBlockNumber,toBlockNumber) =>{
    console.log("Downloading...")
    for (let i=fromBlockNumber;i<=toBlockNumber;i++){
        await blockAndTransactionToDB(i);
    }
}

export const blockAndTransactionToDB = async(blockNumberOrBlockHash)=>{
    let block = await getBlock(blockNumberOrBlockHash.toString());
    let newBlock = new TestBlock;
    newBlock={
        ...block
    };
    // console.log("newBlocktransactions:",newBlock.transactions)
    let transactionsArray=newBlock.transactions;
    newBlock.transactions=[];
    await (async () =>{
        if(transactionsArray!=null){
            let receipt
            await (async () =>{
                console.log("transactionsArray",transactionsArray)
                for(let transactionHash of transactionsArray ){
                    console.log("transactionHash",transactionHash);
                    receipt = await getTransactionReceipt(transactionHash)
                    let transaction = await getTransaction(transactionHash);
                    let newTransaction = new TestTransaction({
                        ...receipt,
                        value: transaction.value,
                        nonce: transaction.nonce,
                        gasPrice: transaction.gasPrice,
                        input:transaction.input,
                    });
                    console.log("Transactiondata:",newTransaction);
                    let response = await newTransaction.save();
                    console.log('transaction:',response);
                    newBlock.transactions.push(response._id);
                }
            })()
        }
    })()
    console.log("block:",newBlock);
    await TestBlock.create(newBlock);
}



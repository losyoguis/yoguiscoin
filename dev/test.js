const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const previosBlockHash = 'JDKDLKSD';
const currentBlockData = [
    {
        amount: 10,
        sender: 'KDHSLKDHLSKHDASLD',
        recipient: 'JKDHKDKSDKDKSKSDH'
    },

    {
        amount: 11,
        sender: 'AKDHSLKDHLSKHDASLD',
        recipient: 'AJKDHKDKSDKDKSKSDH'
    },

    {
        amount: 12,
        sender: 'BKDHSLKDHLSKHDASLD',
        recipient: 'BJKDHKDKSDKDKSKSDH'
    }

];

console.log(bitcoin.proofOfWork(previosBlockHash, currentBlockData));




const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '1JHJFJBJFBBFBNFBNFBMN', '2GFJBFJKEJEJJEBJVEV');

bitcoin.createNewTransaction(100, 'yoguis111111', 'caliche2222222' )

console.log(bitcoin);
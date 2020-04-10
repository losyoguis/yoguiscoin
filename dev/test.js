const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '1JHJFJBJFBBFBNFBNFBMN', '2GFJBFJKEJEJJEBJVEV');

bitcoin.createNewTransaction(100, 'yoguis111111', 'caliche2222222');

bitcoin.createNewBlock(0002, '3JHJFJBJFBBFBNFBNFBMN', '4GFJBFJKEJEJJEBJVEV');



console.log(bitcoin);
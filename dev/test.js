const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OJHJFJBJFBBFBNFBNFBMN', 'FGFJBFJKEJEJJEBJVEV');
bitcoin.createNewBlock(56656, 'aaaOJHJFJBJFBBFBNFBNFBMN', 'bbbbbFGFJBFJKEJEJJEBJVEV');
bitcoin.createNewBlock(9565, 'ccccOJHJFJBJFBBFBNFBNFBMN', 'dddddFGFJBFJKEJEJJEBJVEV');

console.log(bitcoin);
const fs = require('fs');
const crypto = require('crypto');

// Get the private key
const { privateKey } = JSON.parse(fs.readFileSync('./key-gen.html'));

// Get the encrypted keyword
const result = fs.readFileSync('./result.html', 'utf8');
const encryptedKeyword = Buffer.from(result.slice(-344), 'base64');
console.log(`Encrypted word output: ${result.slice(-344)}`);

// Decrypt the encrypted keyword using the private key
const decryptedKeyword = crypto.privateDecrypt(privateKey, encryptedKeyword);
fs.appendFileSync('./result.html', `<br /><br />Decrypted output: <br />${decryptedKeyword.toString()}<br /><br />-------------------------<br /><br />`);

// Print decrypted output
console.log(`Decrypted output: ${decryptedKeyword.toString()}`);
const fs = require('fs');
const crypto = require('crypto');

// Load public key
const { publicKey } = JSON.parse(fs.readFileSync('./key-gen.html'));

// Get input from user
const prompt = require("prompt-sync")({ sigint: true });
const keyword = prompt("please enter the keyword: ");

// Encrypt input using public key
const encryptedKeyword = crypto.publicEncrypt(publicKey, Buffer.from(keyword));

// Save input and output to file
fs.appendFileSync('./result.html', `Input: ${keyword}\n<br />Encrypted output: ${encryptedKeyword.toString('base64')}`);
console.log(`Input: ${keyword}\nEncrypted : ${encryptedKeyword.toString('base64')}`);
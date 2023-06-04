// const fs = require("fs");
// const crypto = require("crypto");

// // Generate key pair
// const keyPair = crypto.generateKeyPairSync("rsa", {
//     modulusLength: 2048,
//     publicKeyEncoding: {
//       type: 'spki',
//       format: 'pem'
//     },
//     privateKeyEncoding: {
//       type: 'pkcs8',
//       format: 'pem',
//     }
//   });

// // const publicKey = key.exportKey("pkcs8-public-der").toString("hex");
// // const privateKey = key.exportKey("pkcs1-der").toString("hex");

// fs.writeFileSync("./key-gen.html", JSON.stringify({ publicKey: keyPair.publicKey, privateKey: keyPair.privateKey }));

// console.log({ publicKey: keyPair.publicKey, privateKey: keyPair.privateKey });

const fs = require('fs');
const crypto = require('crypto');

// Generate key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// Save key pair to file
fs.writeFileSync('./key-pairs/key-gen.html', JSON.stringify({ publicKey, privateKey }));
# Overview

This app creates a secure key pair using the crypto module, encrypts a user input using the public key, and decrypts the encrypted input using the private key. The process flow ensures that the private key is kept safe and secure while allowing for secure data communication between parties.

## Preparation

Use the package manager [npm](https://www.npmjs.com/) to install prompt-sync.

```bash
npm install prompt-sync
```

## Implementation

1. We create a directory named "zrpl-test".
```bash
mkdir zrpl-test
```

2. We create a "key-pairs" directory inside the "zrpl-test" directory to store the generated key pairs.
```bash
cd zrpl-test
mkdir key-pairs
```
3. We create a file named "api-key-gen.js" that uses the crypto module to generate private and public key pairs and save the result in "key-gen.html" in the "key-pairs" directory.

4. We create a file named "encrypt.js" that loads the public key from "key-gen.html", takes a keyword from the user, encrypts the string using the public key, and saves the input and output in "result.html".

5. We create a file named "decrypt.js" that loads the private key from "key-gen.html", loads the encrypted keyword from "result.html", decrypts the string using the private key, and prints the decrypted output.

6. We run api-key-gen.js to generate the key pairs and save them to the "key-pairs" directory.
```bash
node .\key-pairs\api-key-gen.js
```

7. We run encrypt.js to encrypt a keyword using the public key and save the input and output in "result.html".
```bash
node encrypt.js
```

8. We run decrypt.js to decrypt the encrypted keyword using the private key and print the decrypted output on the screen.
```bash
node decrypt.js
```
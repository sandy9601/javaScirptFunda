const crypto=require("crypto")

let myKey=crypto.createCipher('aes-128-ccm',"sandy")

console.log(myKey);
const NodeRSA = require("node-rsa");
const key = new NodeRSA({b : 512});

var public_key = key.exportKey("public");
var private_key = key.exportKey("private");

console.log(public_key+":\n"+private_key+"\n");
let key_public = new NodeRSA(public_key);
let key_private = new NodeRSA(private_key);

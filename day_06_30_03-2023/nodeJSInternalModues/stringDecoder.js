const StringDecoder=require("string_decoder").StringDecode
var d = new StringDecoder('utf8');
var b = Buffer('abc');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;
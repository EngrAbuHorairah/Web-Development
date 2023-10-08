const file = require("fs");
let mydata = file.readFileSync('test.txt','utf-8',);
mydata = mydata.replace('My name is ','Myself');
console.log(mydata);
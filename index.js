console.log('hello');
const http  = require("http");
http.createServer((req,res)=>{
    res.write("How are you ??");
    res.write("I'm kshitij and I am good");
    res.end();
}).listen(3000);
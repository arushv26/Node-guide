const http  = require("http");
http.createServer((req,res)=>{
    res.write("How are you ??");
    res.write("I am happy.");
    res.end();
}).listen(3000);
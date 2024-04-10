const http  = require("http");
http.createServer((req,res)=>{
    res.write("How are you ??");
    res.end();
}).listen(3000);
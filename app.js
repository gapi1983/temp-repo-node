const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("welcome to our home page")
        return

    }
    else if(req.url==="/about"){
        res.end("Welcome to our about page")
        return

    }
    res.end(`<h1>sorry cant find</h1>`)
})

server.listen(5000)
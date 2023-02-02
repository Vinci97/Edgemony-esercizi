const http = require('http')
const fs = require('fs')
const listaJson = require('./lista.json')
const server = http.createServer((req, res)=> {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url === '/'){
        let htmlHome = fs.readFileSync('home-page.html')
        res.end(htmlHome)
    }
    else if(req.url === '/chi-sono'){
        let htmlChiSono = fs.readFileSync('chi-sono.html')
        res.end(htmlChiSono)
    }else if(req.url === '/api/lista'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        const lista = JSON.stringify(listaJson)
        res.end(lista)
    }
    else{
        res.writeHead(404);
        res.end('not found');
    }

}).listen(3001);
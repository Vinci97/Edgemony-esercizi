const http = require('http');

const server = http.createServer((req,res)=>{
    
    if(req.url === '/paginaIniziale')
// http://localhost:3000/pagina iniziale
        res.end('pagina iniziale')
    else if(req.url === '/studenti')
// http://localhost:3000/studenti
        res.end('studenti')
    else if(req.url === '/corsi')
 // http://localhost:3000/corsi   
        res.end('corsi')
    else{
        res.writeHead(404)
        res.end('pagina non trovata')
    }
});
server.listen(3000)
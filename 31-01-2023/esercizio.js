const http = require('http')
const os = require('os')
const fs = require('fs')

const Cliente =  fs.readFileSync('Cliente.html');
const prodotti =  fs.readFileSync('Prodotti.html');
let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)
       else if(req.url === '/cliente')
        res.end(Cliente)
        else if(req.url === '/prodotti')
        res.end(prodotti)
        else{
            res.writeHead(404)
            res.end('sorry, not found')
        }
})
server.listen(3001)
console.log(messaggio)

const http = require('http')
const PORT = 3001;

let articoli = `<!doctype html>
<html>
<head>
</head>
<body>
   <h1>ARTICOLI</h1>
</body>
</html>`;
let commenti = `<!doctype html>
<html>
<head>
</head>
<body>
   <h1>COMMENTI</h1>
</body>
</html>`;
let utenti = `<!doctype html>
<html>
<head>
</head>
<body>
   <h1>UTENTI</h1>
</body>
</html>`;


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    console.log(`Server connesso alla porta: ${PORT}`)
    if(req.url === '/')
    res.end(articoli)
    else if(req.url === '/commenti')
    res.end(commenti)
    else if(req.url === '/utenti')
    res.end(utenti)
    else{
        res.writeHead(404)
        res.end('sorry, not found')
    }
}).listen(PORT)
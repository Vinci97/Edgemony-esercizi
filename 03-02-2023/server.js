const express = require('express');
const path = require('path')

const app = express()
const PORT = 3001

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/home.html')
});
app.get('/descrizione', (req, res)=>{
    res.sendFile(__dirname + '/public/descrizione.html')
});
app.get('/prodotti', (req, res)=>{
    res.sendFile(__dirname + '/public/prodotti.html')
});
app.get('/contatti', (req, res)=>{
    res.sendFile(__dirname + '/public/contatti.html')
});
app.get('*', (req, res)=>{
    res.send('404 | pagina non trovata')
});
app.listen(PORT, ()=>{
    console.log(`server attivo su ${PORT}`)
})

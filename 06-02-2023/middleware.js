const express = require('express')
const app = express()
const utenti = require('./utenti.json')
const PORT = 5000;
const authorize = require('./auth')
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/utenti', (req,res)=>{
   const listaUtenti = JSON.stringify(utenti);
   res.send(listaUtenti)
})
app.get('/api/utenti',authorize, (req,res)=>{
   const listaUtenti = utenti.filter((utente)=>utente.id === 2);
   res.send(listaUtenti);
})
app.get('/api/utente/:utenteId',(req, res)=>{
    const{utenteId} = req.params

    const singoloUtente = utenti.filter(
        (utente)=>utente.id === Number(utenteId))
   
    if(!singoloUtente){
       return res.status(404).send('utente non trovato')
    }

    return res.send(singoloUtente)
})


app.listen(PORT,()=>{
    console.log('server in ascolto sulla porta 5000')
})
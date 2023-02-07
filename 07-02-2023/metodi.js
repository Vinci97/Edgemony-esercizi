
const express = require('express')
const {utenti1} = require('./utenti')
const app = express()
const PORT = 3000

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//ROUTING applicazione
app.get('/api/utenti', (req, res) =>{
    res.status(200).json({success:true, data:utenti1})
})

//Inviamo i dati alla nostra applicazione
app.post('/api/utenti', (req, res) =>{
    const {id, name} = req.body //contenuto della richiesta post
   
    if(!id || !name){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, utenti: {id:id, name:name} })
})



app.listen(PORT, () =>{
    console.log(`Server ascolta su porta ${PORT}`)
})
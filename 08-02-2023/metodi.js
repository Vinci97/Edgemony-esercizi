
const express = require('express')
const articoli = require('./articoli.json')
const app = express()
const PORT = 3000

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//ROUTING applicazione
app.get('/api/articoli', (req, res) =>{
    res.status(200).json({success:true, data:articoli})
})

//METODO POST
app.post('/api/articoli', (req, res) =>{
    const {id, title, body} = req.body 
   
    if(!id || !title ||!body ){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, articoli:[...articoli, {id:id, title:title,body:body} ]})
})
// METODO POST CON DATO RICEVUTO DA UN FORM
app.post('/login',(req, res)=>{
    const{name} = req.body
    if(name){
        return res
        .status(200)
        .send(`Benvenuto/a: ${name}`)
    }
    return res.status(400)
    .json({success:false, msg:`non c'è nessuno che si chima: ${name}`})   
})

// METODO PUT
app.put('/api/articoli/:id',(req, res) =>{
    const {id} = req.params
    const {title} = req.body
    
     const articolo = articoli.find((articolo)=> articolo.id === Number(id))

    if(!articolo){
        return res.status(400)
        .json({success:false, msg:`non c'è nessun id: ${articoli.id}`})     
    }
    const newArticoli = articoli.map((articolo)=>{
        if(articolo.id === Number(id)){
            articolo.title = title;
        }
        return articolo
    })
    res.status(200).json({success:true, data:newArticoli})
})

// METODO DELETE
app.delete('/api/articoli/:id',(req, res) =>{
    const articolo = articoli.find((articolo)=> articolo.id === Number(req.params.id))
    if(!articolo){
        return res.status(400)
        .json({success: false, msg:`non c'è nessu id: ${req.params.id}`})
    }

    const newArticoli = articoli.filter((articolo)=> articolo.id !== Number(req.params.id))
    return res.status(200)
    .json({success:true, data:newArticoli})
})


app.listen(PORT, () =>{
    console.log(`Server ascolta su porta ${PORT}`)
})
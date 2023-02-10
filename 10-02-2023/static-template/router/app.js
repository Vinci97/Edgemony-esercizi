const express = require('express')
const app = express()
const hbs = require('hbs')
const router = require('./route')

app.use('/',router)
app.use('/about',router)
app.use('/contatti',router)
app.use('/formazione',router)
app.use('/web-design',router)

app.listen(3000,()=>{
    console.log(`server attivo `)
})
const express = require('express')

const router = express.Router()
router.use(express.static('./public'))

router.get('/',(req, res)=>{
    res.render(__dirname + '/views/index.hbs')
})
router.get('/about',(req, res)=>{
    res.render(__dirname + '/views/about.hbs')
})
router.get('/contatti',(req, res)=>{
    res.render(__dirname + '/views/contatti.hbs')
})
router.get('/formazione',(req, res)=>{
    res.render(__dirname + '/views/formazione.hbs')
})
router.get('/web-design',(req, res)=>{
    res.render(__dirname + '/views/web-design.hbs')
})

module.exports= router
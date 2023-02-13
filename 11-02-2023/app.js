const express = require('express')
const hbs = require('hbs')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4040

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.use(session({secret: "la mia sessione "}))


app.get('/',(req, res)=>{
    res.render('index',{titolo: "home page"})
})
app.get('/about',(req, res)=>{
    res.render('about',{titolo: "chi sono"})
})
app.get('/contatti',(req, res)=>{
    res.render('contatti',{titolo: "contatti"})
})
app.get('/formazione',(req, res)=>{
    res.render('formazione',{titolo: "formazione"})
})
app.get('/web-design',(req, res)=>{
    res.render('web-design',{titolo: "web disign"})
})
app.get('/web-design',(req, res)=>{
    res.render('web-design',{titolo: "web disign"})
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login', (req, res) =>{
    console.log(`${req.body.name} / ${req.body.password}`)
    if(!req.body.name || !req.body.password){
        res.status(400)
        res.render('/login', {message: 'per favore, aggiungi tutti i dati richiesti'})
    }else{
        let name = 'vincenzo'
        let password = '246'
        let userAuth = {name:name, password:password}

        if(name == req.body.name && password == req.body.password){
            req.session.user = userAuth
            res.redirect('/profilo')
        }else{
            res.redirect('/warning')
        }
    }
})
function checkPage(req, res, next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}
app.get('/profilo',checkPage,(req,res)=>{    
    console.log('hai fatto il login')
    res.render('profilo')
})

app.get('/warning',(req,res)=>{
    res.render('warning')
})
app.get('/logout', (req, res) =>{
    console.log('hai fatto logout')
    req.session = null
    res.redirect('/login')
})

app.get('/*',(req, res)=>{
    res.render('404',{titolo: "not found"})
})




app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 4000

const myPreference =
    {
        pet:"gatti",
        color:"nero",
        season:"primavera"
    } ;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render('home',{
        nome: "Vincenzo",
        titolo: "corso di node.js",
        myPreference: myPreference,

    })
})
app.get('/about', (req, res)=>{
    res.render('about',{
        titolo: "questo è l'about",
    })
})
app.get('/mi-presento', (req, res)=>{
     res.render("mi-presento",{
        titolo: "questa è la presentazione",
    })
})
app.get('/login', (req, res)=>{
     res.render("login",{
        titolo: "questo è login",
    })
})


app.post('/login',(req, res)=>{
    const{name} = req.body
    if(name){
        return res
        .status(200)
        .render(`Benvenuto/a: ${name}`)
    }
    return res.status(400)
    .json({success:false, msg:`non c'è nessuno che si chima: ${name}`})   
})




app.listen(PORT,()=>{
    console.log(`server attivo su ${PORT}`)
})
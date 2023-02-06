const authorize = (req, res, next) =>{
    const {user}  = req.query;
    if(user === 'Vincenzo'){
        res.user = {name: 'Vincenzo'}
        next()
    }else{
        res.status(401).send('non sei autorizato')
    }
}
module.exports = authorize
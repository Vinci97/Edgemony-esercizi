const MongoClient = require('mongodb').MongoClient
let url = "mongodb+srv://vincenzo:UzmpZHhQJ9HeXsXi@cluster0.ukfasiq.mongodb.net/test"

// MongoClient.connect(url)
// .then((db)=>{
//     accountsDb = db
//     collection = accountsDb.db('school')
//     console.log('database connesso')
// })
// .catch((err)=>{
//     console.log(err)
// })

// MongoClient.connect(url,(err, db)=>{
//     if(err) throw err
//     let dbase = db.db('school')
//     dbase.createCollection('students'),(err, res)=> {
//         if(err) throw err
//         console.log('Collezione creata')
//         db.close()
//     }
//     dbase.createCollection('courses'),(err, res)=> {
//         if(err) throw err
//         console.log('Collezione creata')
//         db.close()
//     }
// })

// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase = db.db('shcool');

//     let students= [
        // {nome: 'Mario', cognome: 'rossi', matricola:'04',corsi: 'Scienze Motorie', esami: ['anatomia','bio-meccanica','scienze delmovimento']},
    //     {nome: 'Rosrio', cognome: 'rossi', matricola:'06',corsi: 'Scienze Motorie', esami: ['anatomia','bio-meccanica','scienze delmovimento']}

    // ]
    // dbase.collection('students').insertMany(students,(err,res)=>{
    //     if(err) throw err;
    //     console.log(`Numero di record inseriti: ${res.insertedCount}`)
    // })
    // let courses= [
    //     {Coros: 'Scienze Motorie', materia: 'scienze delmovimento', docenti: ['luca','paolo','luigi']},
    //     {Corso: 'Scienze Motorie', materia: 'scienze delmovimento', docenti: ['luca','paolo','luigi']}

    // ]
    // dbase.collection('courses').insertMany(courses,(err,res)=>{
    //     if(err) throw err;
    //     console.log(`Numero di record inseriti: ${res.insertedCount}`)
    // })
// })


// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     let dbase = db.db("shcool");
//     let query = { matricola:'06'}
//     dbase.collection("students").find(query).toArray(function (err, res){
//         if(err) throw err;
//         console.log(res)
//         db.close();
//     })
// })
// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     let dbase = db.db("shcool");
//     let query = { matricola:'06'}
//     dbase.collection("students").deleteMany(query,(err, obj)=>{
//         if(err) throw err;
//         console.log(`${obj.result} records cancellati`)
//         db.close();
//     })
// })
MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
    let dbase = db.db("shcool");
    let query = {nome: 'Mario'}
    let newValue = {$set: {matricola:'08',cognome: 'duca'}}
    dbase.collection("students").updateOne(query, newValue,function (err, res){
        if(err) throw err;
        console.log(` records aggiornati`)
        db.close();
    })
})
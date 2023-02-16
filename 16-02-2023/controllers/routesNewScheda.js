const express = require('express');
let router2 = express.Router();
const mongoose = require('mongoose');
const Nota2 = mongoose.model('newSchemaModel');

router2.get('/new', (req, res) => {
    res.render("addupdate2", {
        viewTitle: "Inserisci una nota"
    });
});

router2.post('/new', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    let newSchema = new Nota2();
    newSchema.corso = req.body.corso;
    newSchema.materia = req.body.materia;
    newSchema.docenti = req.body.docenti;
    newSchema.save((err, doc) => {
        if (!err)
            res.redirect('listNew');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Nota2.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('listNew'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

router2.get('/listNew', (req, res) => {
    Nota2.find((err, docs) => {
        if (!err) {
            res.render("listNew", {
                notaNewlist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


router2.get('/:id', (req, res) => {
    Nota2.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addupdate2", {
                viewTitle: "Aggiornamento",
                notaNewlist: doc
            });
        }
    });
});

router2.get('/delete/:id', (req, res) => {
    Nota2.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/listNew');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = router2;
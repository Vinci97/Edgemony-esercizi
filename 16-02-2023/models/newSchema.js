const mongoose = require('mongoose');



var newSchema = new mongoose.Schema({
    corso: {
        type: String,     
    },
    materia: {
        type: String,    
    },
    docenti: {
        type: String
    }
});




mongoose.model('newSchemaModel', newSchema);
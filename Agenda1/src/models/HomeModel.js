const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);


//Responsável por buscar e criar dados

class Home {
    
}


module.exports = Home;
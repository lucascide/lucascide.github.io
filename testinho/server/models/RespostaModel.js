const mongoose = require('mongoose');

const RespostaSchema = new mongoose.Schema({
    resposta: { type: String, required: true}
});

const RespostaModel = mongoose.model('Resposta', RespostaSchema);


//Responsável por buscar e criar dados

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }



    async register() {
        this.cleanUp();

        this.user = await RespostaModel.create(this.body);

        

    }

    static async resgate(){
        const lista = await RespostaModel.find();
        return lista;
    }



    cleanUp() {

        this.body = {
            resposta: this.body.resposta
        }
    }
}


module.exports = Login;
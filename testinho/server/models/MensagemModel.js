const mongoose = require('mongoose');

const MensagemSchema = new mongoose.Schema({
    mensagem: { type: String, required: true}
});

const MensagemModel = mongoose.model('Mensagem', MensagemSchema);


//Responsável por buscar e criar dados

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }



    async register() {
        this.cleanUp();

        this.user = await MensagemModel.create(this.body);

        

    }

    static async resgate(){
        const lista = await MensagemModel.find();
        return lista;
    }



    cleanUp() {

        this.body = {
            mensagem: this.body.mensagem,
        }
    }
}


module.exports = Login;
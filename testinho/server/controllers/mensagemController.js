const Mensagem = require('../models/MensagemModel')


exports.register = async (req, res) => {
    try{
        const mensagem = new Mensagem(req.body);
        await mensagem.register();

        return res.send('opa');

    } catch(e) {
        console.log(e);
        return res.render('404')
    }

}

exports.resgate = async (req, res) => {
    try{
        const listaMsg = await Mensagem.resgate();
        res.json(listaMsg);
    } catch(e){
        console.log(e);
    }
}


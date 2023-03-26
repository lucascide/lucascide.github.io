const Resposta = require('../models/RespostaModel')


exports.register = async (req, res) => {
    try{
        const resposta = new Resposta(req.body);
        await resposta.register();
        const r = await Resposta.resgate();
        console.log(r);
        return res.json(r);

    } catch(e) {
        console.log("e");
        return res.render('404')
    }

}

exports.resgate = async (req, res) => {
    try{
        const listaMsg = await Resposta.resgate();
        res.json(listaMsg);
    } catch(e){
        console.log(e);
    }
}
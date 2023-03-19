const HomeModel = require('../models/HomeModel')
const Contato = require('../models/ContatoModel');


exports.index = async (req, res) => {

    const contatos = await Contato.mostrarContatos();
    res.render('index', {contatos});

    return;
}


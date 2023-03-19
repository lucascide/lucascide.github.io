const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {contato: {}});
}

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => {
                return res.redirect('/contato/index');
            });
            return;
        }


        req.flash('sucess', 'Contato registrado com sucesso');
        req.session.save( () => {
            return res.redirect(`/contato/index/${contato.contato._id}`);
        });

        return;

    } catch(e) {
        console.log(e);
        return res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render('404');


    const contato = new Contato();
    const contatoSelect = await contato.buscaPorId(req.params.id);

    if(!contatoSelect) return res.render('404');

    res.render('contato', {contato: contatoSelect})
}

exports.edit = async(req, res) => {
    try{
        if(!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => {
                return res.redirect('/contato/index');
            });
            return;
        }
    
    
        req.flash('sucess', 'Contato editado com sucesso');
        req.session.save( () => {
            return res.redirect(`/contato/index/${contato.contato._id}`);
        });
        
        return;

    } catch(e){
        console.log(e);
        res.render('404');
    }


}

exports.delete = async (req, res) => {
    try{
        if(!req.params.id) res.render('404');
        const contato = await Contato.delete(req.params.id);

        if(!contato) return res.render('404');

        req.flash('sucess', 'Contato apagado com sucesso');
        req.session.save( () => {
            return res.redirect('/');
        });
        
        return;
    } catch(e) {
        console.log(e);
        res.render('404');
    }
    
}
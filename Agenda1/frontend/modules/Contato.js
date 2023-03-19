const criarMensagemErro = (a, classe, texto) => {
    const criado = document.createElement('p');
    criado.innerText = texto;
    criado.style.color = 'red';
    const nameDiv = a.querySelector(classe);
    nameDiv.appendChild(criado);
}


export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(!nameInput.value){

            criarMensagemErro(el, '.nomi', 'Eh necessário um nome de contato')
            
                if(!emailInput.value && !telInput.value) {
                    
                    criarMensagemErro(el, '.final', "Pelo menos um campo precisa ser enviado: E-mail ou telefone");

                }
            error = true;
        }



        if(!error) el.submit();
    }


}
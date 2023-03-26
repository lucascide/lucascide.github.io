import { useEffect, useState } from 'react';
import './Chat.css';


function Chat() {



    function sendQuestion() {

        let sQuestion = input;




        function remove_linebreaks(str) {
            return str.replace(/[\r\n]+/gm, "");
        }

        fetch('https://api.openai.com/v1/completions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + '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'
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Por favor responda com poucas palavras a pergunta: " + sQuestion,
                temperature: 0.5,
                max_tokens: 2048,

            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json.choices[0].text);
                const respost = remove_linebreaks(json.choices[0].text)
                sendResp(respost);
            })
            .catch(e => console.log(e))

    }



    const sendResp = (data) => {
        fetch('/api2', {
            method: "POST",
            body: JSON.stringify({ resposta: data }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((response) => response.json())
            .then(json => {
                setRespostas(json); setLoading(false);
            })
            .catch(e => console.log(e));

    }



    var responseClone = 1;
    const sendMsg = () => {
        fetch('/api')
            .then(function (response) {// 2
                return response.json();
            }) // PROBLEMA?
            .then(response => {  setMensagens(response); })
            .catch(e => {
                console.log(e); // 4
            })
    }



    const [input, setInput] = useState(' o ');
    const [respostas, setRespostas] = useState([{resposta: 'carregando'}]);
    const [mensagens, setMensagens] = useState([{mensagem: 'carregando'}]);
    const [loading, setLoading] = useState(true);





    //Quando a página atualiza Recupera todos os dados da base de dados

    useEffect(() => {
       setLoading(true);
       sendMsg();
       sendRp()

    },
        []);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/reg", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ mensagem: input })
        })
            .then(() => { setLoading(true); sendMsg(); sendQuestion() })
            .catch(e => console.log(e))

    }

    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    }


    const deBoinha = (um, dois, i, j) => {
        if ((i % 2 === 0) && um[j]) {
            console.log(um[j].mensagem);
            return (
                <div className="balao resposta">
                    <p>{um[j].mensagem}</p>
                </div>
            );
        }
        else if( dois[j] ){
            console.log(dois[j].resposta);
            
            return (
                
                <div className="balao pergunta">
                    <p>{dois[j].resposta}</p>
                </div>
            );
        }
    }

    const deBoa = (um, dois) => {

        const arraio = []

        let j = 0;

        for (let i = 0; i < um.concat(dois).length;) {
            arraio.push(deBoinha(um, dois, i, j))
            if(!(i % 2 === 0)) j++;
            i++;
        }

        return arraio;



    }

    const sendRp = () => {
        fetch('/api3')
            .then(function (response) {
                return response.json();
            }) // PROBLEMA?
            .then(response => {  setRespostas(response); setLoading(false)})
            .catch(e => {
                console.log(e); // 4
            })
    }






    if (!loading) {
        return (
            <div className="Chat">


                

                {deBoa(mensagens, respostas).map((e)=> e)}








                <div className='espaco'></div>

                <form onSubmit={(e) => { handleSubmit(e) }} className="opa">
                    <input
                        onChange={handleChange} name='mensagem' className='o' type='text' placeholder='Digite sua mensagem' />
                </form>
            </div>
        );
    } else {
        return (<div className="ld">
            <img src={require('./assets/cabeca.jpg')}/>
            
            
        </div>)
    }




}

export default Chat;
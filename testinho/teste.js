/*
async function sendMsg(){
    const response = await fetch('http://localhost:3001/mensagem/resgate')
    const data = await response.json();
    return data;    
}

const escrever = async () => {
    const msg = await sendMsg()
    console.log(msg);
}

escrever();
*/


function SendQuestion(){
    let sQuestion = "O que é um hipopótamo?"

    function remove_linebreaks( str ) {
        return str.replace( /[\r\n]+/gm, "" );
    }

    fetch('https://api.openai.com/v1/completions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + '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'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: sQuestion,
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

SendQuestion();


const sendResp =  (data) =>{
        fetch('http://localhost:3001/api/rec', {
        method:"POST",
        body: JSON.stringify({resposta: data}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(e => console.log(e));
        
}


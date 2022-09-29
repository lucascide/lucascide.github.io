
//const {soma} = require("./operacoes.js");


//Funções
const soma = (a,b) => {
    return a+b
}

function mult(a,b) {
  return a*b
}

const sub = function(a,b) {
    return a-b
}

const div = (a,b) => a/b




//O que acontece no clique

document.querySelector(".aperte").onclick = () => { return document.querySelector(".queijo p").innerHTML="";}

document.querySelector(".um").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"1";}

document.querySelector(".dois").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"2";}

document.querySelector(".tres").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"3";}

document.querySelector(".quatro").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"4";}

document.querySelector(".cinco").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"5";}

document.querySelector(".seis").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"6";}

document.querySelector(".sete").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"7";}

document.querySelector(".oito").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"8";}

document.querySelector(".nove").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"9";}

document.querySelector(".zero").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +"0";}

document.querySelector(".virgula").onclick = () => { return document.querySelector(".queijo p").innerHTML= document.querySelector(".queijo p").innerHTML +".";}

document.querySelector(".mais").onclick = () => {
     a = document.querySelector(".queijo p").innerHTML;
     operacao = soma;
     document.querySelector(".queijo p").innerHTML = "";
}

document.querySelector(".menos").onclick = () => {
    a = document.querySelector(".queijo p").innerHTML;
    operacao = sub;
    document.querySelector(".queijo p").innerHTML = "";
}

document.querySelector(".multiplicacao").onclick = () => {
    a = document.querySelector(".queijo p").innerHTML;
    operacao = mult;
    document.querySelector(".queijo p").innerHTML = "";
}

document.querySelector(".divisao").onclick = () => {
    a = document.querySelector(".queijo p").innerHTML;
    operacao = div;
    document.querySelector(".queijo p").innerHTML = "";
}

document.querySelector(".porcentagem").onclick = () => {
    a = document.querySelector(".queijo p").innerHTML;
    document.querySelector(".queijo p").innerHTML = a * 0.01;
}

document.querySelector(".igual").onclick = () => {
    b = document.querySelector(".queijo p").innerHTML;
    b = Number(b);
    a = Number(a);
    if (operacao(a,b)) {
        document.querySelector(".queijo p").innerHTML = operacao(a,b);
        a = 0;
    } else {
        document.querySelector(".queijo p").innerHTML = "Digita direito burro";
    }
} 



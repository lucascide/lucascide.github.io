i=0

document.querySelector("button").onclick = () => {
    if (i===0) {
        document.querySelector("button").style.left = "20vw";
        document.querySelector(".Menu").style.left = "0";
    } else {
        document.querySelector(".Menu").style.left = "-22vw";
        document.querySelector("button").style.left = "0";
    }
    i = i+1;
    if (i===2){
        i=0
    }
}


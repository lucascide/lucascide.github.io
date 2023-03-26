const array1 = ['a', 'b', 'c', 'd']
const array2 = [1, 2];
let tamanhoMaior = 0;

if (array1.length >= array2.length)
    tamanhoMaior = array1.length;
else
    tamanhoMaior = array2.length;






for (let i = 0; i < tamanhoMaior; i++) {
    if (array1[i])
        console.log(array1[i])
    if (array2[i])
        console.log(array2[i])
}


const palavra = "passei";
let posicao = palavra.length;
let stringInvertida = "";

for(let i = posicao - 1; i <= posicao; i--){
    stringInvertida = stringInvertida + palavra[i]
    if(i === 0){
        break
    }
}
console.log(stringInvertida)
const numeroInformado = 21;

let anterior = 0;
let atual = 1;
let proximo = 1;

let n = 1;
while(n <= numeroInformado){
    console.log(proximo)
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
    if(proximo === numeroInformado){
        console.log(proximo)
        console.log(`${numeroInformado} pertence a sequência`)
        break
    }else{
        n = n + 1;
    }

}

if(proximo !== numeroInformado){
    console.log(`${numeroInformado} não pertence a sequência`)
}

// Usar o terminal para ver as respostas
// exemplo de comando: node ./fibonacci.js 
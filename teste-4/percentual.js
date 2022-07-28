const sp = 67836.43;
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const total = sp + rj + mg + es + outros;

const percentualSP = (sp / total) * 100;
const percentualRJ = (rj / total) * 100;
const percentualMG = (mg / total) * 100;
const percentualES = (es / total) * 100;
const percentualOutros = (outros / total) * 100;


console.log(`SP ${percentualSP.toFixed(1)}%`)
console.log(`RJ ${percentualRJ.toFixed(1)}%`)
console.log(`MG ${percentualMG.toFixed(1)}%`)
console.log(`ES ${percentualES.toFixed(1)}%`)
console.log(`Outros ${percentualOutros.toFixed(1)}%`)

// Usar o terminal para ver as respostas
// exemplo de comando: node ./percentual.js 
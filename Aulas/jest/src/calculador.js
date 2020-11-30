const array = [2,6]; //<--- NOTAS

console.log(mediaDoAluno(array)); 

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
    
    if ( media <= 0 ) return 'SR';
    if ( media <= 3 ) return 'II';
    if ( media <= 5 ) return 'MI';
    if ( media <= 7 ) return 'MM';
    if ( media <= 9 ) return 'MS';
    return 'SS';
} 

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}

module.exports = {media}
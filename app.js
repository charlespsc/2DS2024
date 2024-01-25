alert('Boas vindas ao Jogo do número secreto.');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');
console.log('Valor do chute:', chute);
console.log('Resultado da comparação:', chute == numeroSecreto);

//Abra o console para ver a mensagem do console.
if (numeroSecreto == chute) {
    alert(`Isso aí! Você descobriu o número secreto  ${numeroSecreto}`); // Template Strings: usando CRASE ${ variavel }
} else {
    alert('Você errouuuu')
}
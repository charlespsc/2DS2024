let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicaBotao() {
    console.log('O botão foi clicado!');
}

function exibaAlert() {
    alert('Eu amo JS!');
}

function nomeCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaNumeros() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    let soma = num1 + num2;
    alert(`A soma de ${num1} + ${num2} = ${soma}!`);
}

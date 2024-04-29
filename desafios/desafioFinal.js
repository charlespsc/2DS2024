/* Desafios finais
1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.*/
alert("Seja bem vindo ao nosso site!")


/*
2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. 
    Em seguida, utilize o console.log para exibir a mensagem: "Olá, [seu nome]!" no console do navegador.*/

let nomeUsuario = "Prof. Charles!"
console.log(`Olá! ${nomeUsuario}`)


/*
3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. 
    Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".*/

let nome = "Prof. Charles!"
alert(`Olá! ${nome}`)

/*
4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
    Em seguida, armazene a resposta em uma variável e mostre no console do navegador.*/

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(`Sua Linguagem de Programação preferida é ${linguagem}`)

/*
5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
    Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
    Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.*/
let valor1 = 10;
let valor2 = 20;
resultado = valor1 + valor2
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

/*
6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
    Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
    Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.*/
let valor3 = 10;
let valor4 = 20;
resultado2 = valor3 - valor4
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`)

/*
7 - Peça ao usuário para inserir sua idade com prompt. 
    Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
    exibindo uma mensagem apropriada no console.*/


let idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    console.log("Você já é maior de idade!");
} else {
    console.log("Você ainda é menor de idade!");
}


/*
8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
    Use if-else para imprimir a respectiva mensagem.*/

let numero = prompt("Digite um número:")
if (numero == 0) {
    console.log(`O número ${numero} é zero!`)
} else if (numero > 0) {
    console.log(`O número ${numero} é positivo!`)
} else {
    console.log(`O número ${numero} é negativo!`)
}

/*
9 - Use um loop while para imprimir os números de 1 a 10 no console.*/

var i = 1;

while (i < 11) {
    console.log(`O numero é ${i}`)
  i++;
}

/*
10 - Crie uma variável "nota" e atribua um valor numérico a ela. 
    Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.*/
let nota = prompt("Digite a nota:")
if (nota >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}


/*
11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.*/

let numeroAleatorio = Math.random();
console.log(`O número gerado aleatório é ${numeroAleatorio}`);

/*
12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.*/

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(`O número gerado aleatório é ${numeroAleatorio2}`);

/*
13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.*/
let numeroAleatorio3 = parseInt(Math.random() * 100 + 1);
console.log(`O número gerado aleatório é ${numeroAleatorio3}`);
/* Desafio:
 * Pergunte ao usuário qual é o dia da semana. 
 * Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
 * Caso contrário, mostre "Boa semana!".
 *

let diaSemana = prompt('Qual o dia da semana?')

if (diaSemana == 'Sábado') {
    alert('Bom fim de semana!')
} else if (diaSemana == 'Domingo') {
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}
*/


/* Desafio: Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um número Positivo ou Negativo')

if (numeroDigitado > 0) {
    alert('O número é Positivo')
} else {
    alert('O número é Negativo')
}
*/

/* Desafio: Crie um sistema de pontuação para um jogo. 
 * Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
 * Caso contrário, mostre "Tente novamente para ganhar.".

let pontoacaoJogo = prompt('Digite a sua pontuação no Jogo')

if (pontoacaoJogo >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}
*/
 

/* Desafio: Crie uma mensagem que informa o usuário sobre o saldo da conta, 
 * usando uma template string para incluir o valor do saldo.

let saldoConta = 1000

alert(`Seu saldo em conta é R$${saldoConta}.` )
 */

/* Desafio: Peça ao usuário para inserir seu nome usando prompt.
 * Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

let nomeUsuario = prompt('Entre com o usuário')

alert(`Seja Bem Vindo! ${nomeUsuario}`)


/* 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador++; // Incrementa o contador
}
*/

/* 2 - Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador = 10;

while(contador >= 0){
    console.log(contador);
    contador--; // Decrementa o contador
}
*/

/* 3 - Crie um programa de contagem regressiva. 
 * Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numeroMaximo = prompt('Digite um número para iniciar a contagem regressiva:');

while(numeroMaximo >= 0){
    console.log(numeroMaximo);
    numeroMaximo--; // Decrementa o numeroMaximo
}
*/

// 4 - Crie um programa de contagem progressiva. 
// Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroMaximo = prompt('Digite um número para iniciar a contagem Progressiva:');
let contador = 0;

while(contador <= numeroMaximo){
    console.log(contador);
    contador++; // Incrementa o numeroMinimo
}
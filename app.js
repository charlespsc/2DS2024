alert('Boas vindas ao Jogo do número secreto.');
let numeroSecreto = parseInt(Math.random() * 100 + 1);

let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas++; // tentativas = tentativas + 1;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Operador Ternário usado ao invés do if else
alert(`Isso aí! Você descobriu o número secreto  ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

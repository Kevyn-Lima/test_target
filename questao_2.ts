// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num: number): boolean {
    let a: number = 0, b: number = 1;
    
    // Gera os números da sequência de Fibonacci até o número desejado
    while (b < num) {
        [a, b] = [b, a + b]; // Atualiza a e b com os próximos números da sequência
    }
    
    // Verifica se o número está na sequência ou é zero
    return b === num || num === 0;
}

// Exemplo de uso:
const number: number = 21;
if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}
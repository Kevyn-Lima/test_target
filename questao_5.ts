function reverseString(input: string): string {
    let reversed: string = ""; // Garantindo que a variável 'reversed' seja do tipo string

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    return reversed;
}

// Exemplo de uso da função
const text: string = "Olá Mundo"; // Garantindo que a variável 'text' seja do tipo string
console.log(`String invertida: ${reverseString(text)}`);
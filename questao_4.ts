// Definindo o tipo de dado para o objeto de faturamento
interface FaturamentoEstados {
    [estado: string]: number;
}

// Filtra apenas os dias com faturamento
const faturamentoEstados: FaturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
}

// Calcula o faturamento total
const total: number = Object.values(faturamentoEstados).reduce((acumulador, valor) => acumulador + valor, 0);

// Calcula e exibe o percentual de cada estado
console.log("Percentual de Representação:");

for (const estado in faturamentoEstados) {
    const percentual: number = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
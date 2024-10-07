const investimentos = [
  { nome: "Empresa X", custo: 30000, retorno: 40000 },
  { nome: "Empresa Y", custo: 50000, retorno: 60000 },
  { nome: "Imóvel Z", custo: 40000, retorno: 45000 },
  { nome: "Títulos públicos", custo: 10000, retorno: 15000 },
  { nome: "Fundo de investimento F", custo: 20000, retorno: 25000 },
];

const orcamento = 100000;

function bestInvestiment(investimentos, orcamento) {
  const n = investimentos.length;
  let melhorPercentual = 0;
  let melhorComb = [];

  for (let i = 1; i < 2 ** n; i++) {
    let combinacaoAtual = [];
    let custoTotal = 0;
    let retornoTotal = 0;

    for (let j = 0; j < n; j++) {
      if ((i >> j) & 1) {
        combinacaoAtual.push(investimentos[j].nome);
        custoTotal += investimentos[j].custo;
        retornoTotal += investimentos[j].retorno;
      }
    }

    if (custoTotal <= orcamento) {
      const percentualRetorno =
        (retornoTotal - custoTotal) / custoTotal;
      if (percentualRetorno > melhorPercentual) {
        melhorPercentual = percentualRetorno;
        melhorComb = combinacaoAtual;
      }
    }
  }

  return { melhorComb, melhorPercentual };
}

const { melhorComb, melhorPercentual } = bestInvestiment(
  investimentos,
  orcamento
);
console.log(`A melhor combinação de investimentos é: ${melhorComb}`);
console.log(
  `O percentual de retorno é: ${(melhorPercentual * 100).toFixed(2)}%`
);

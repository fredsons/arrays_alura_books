function aplicarDesconto(livros) {
  const desconto = 0.3
  livrosComDesconto = livros.map(livro => {
    return { ...livro, preco: livro.preco - (livro.preco * desconto) }
  })
  return livrosComDesconto
}


// Esse código define uma função chamada aplicarDesconto que recebe uma lista de livros como argumento. Essa função aplica um desconto de 30% ao preço de cada livro da lista e retorna uma nova lista de livros com os preços atualizados.

// Dentro da função, é definida uma constante desconto com o valor de 0.3, representando o desconto de 30%.

// Em seguida, a função utiliza o método map para percorrer cada livro da lista. Para cada livro, é retornado um novo objeto que contém todas as propriedades do livro original (utilizando o operador de propagação ...livro), porém, com o preço atualizado. O preço atualizado é calculado subtraindo do preço original o valor do desconto, que é obtido multiplicando o preço original pelo valor do desconto.

// Ao final do loop, a função retorna a nova lista de livros com os preços atualizados.

// Em resumo, o código da função aplicarDesconto realiza o cálculo do desconto e retorna uma nova lista de livros com os preços atualizados, reduzidos em 30%.
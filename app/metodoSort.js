let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

let ordenacaoAscendente = true; // Variável de controle para a ordenação

function ordenarLivrosPorPreco() {
  if (ordenacaoAscendente) {
    livros.sort((a, b) => a.preco - b.preco); // Ordenação ascendente
  } else {
    livros.sort((a, b) => b.preco - a.preco); // Ordenação descendente
  }

  exibirLivros(livros);
  ordenacaoAscendente = !ordenacaoAscendente; // Alternar entre ordenação ascendente e descendente
}
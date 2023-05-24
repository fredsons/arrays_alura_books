/**
 * Função responsável por filtrar os livros com base no botão clicado.
 * A filtragem pode ser por disponibilidade (quantidade > 0) ou por categoria.
 */
function filtrarLivros() {
  // Obtém o elemento do botão clicado
  const elementoBtn = document.getElementById(this.id);

  // Obtém a categoria do botão clicado
  const categoria = elementoBtn.value;

  // Filtra os livros com base na categoria ou disponibilidade
  let livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

  // Exibe os livros filtrados
  exibirLivros(livrosFiltrados);

  // Se a categoria for "disponivel", calcula e exibe o valor total dos livros disponíveis
  if (categoria === 'disponivel') {
    const valorTotal = calculaValorTotalDisponivel(livrosFiltrados);
    exibeValorTotalDisponivel(valorTotal);
  }
}

/**
 * Função responsável por filtrar os livros por categoria.
 * @param {string} categoria - Categoria para filtragem.
 * @returns {Array} - Array de livros filtrados pela categoria.
 */
function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria === categoria);
}

/**
 * Função responsável por filtrar os livros por disponibilidade (quantidade > 0).
 * @returns {Array} - Array de livros filtrados por disponibilidade.
 */
function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

/**
 * Função responsável por exibir o valor total dos livros disponíveis.
 * @param {number} valorTotal - Valor total dos livros disponíveis.
 */
function exibeValorTotalDisponivel(valorTotal) {
  valorTotalDisponivel.innerHTML = `
    R$ 
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `;
}

// Seleciona todos os botões e adiciona o evento de clique a cada um deles
const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

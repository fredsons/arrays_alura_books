const inserirLivros = document.getElementById('livros')

function exibirLivros(listaDeLivros) {
  listaDeLivros.forEach(livro => {
    inserirLivros.innerHTML +=
      `
      <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
  })
}

// Esse código está definindo uma função chamada exibirLivros que recebe uma lista de livros como argumento. Essa função percorre cada livro da lista e cria elementos HTML para exibir as informações do livro na interface.

// A função utiliza o método forEach para iterar sobre cada livro da lista. Dentro do loop, são criadas tags HTML utilizando template literals (delimitados por crases `) para estruturar o conteúdo a ser exibido.

// Cada livro é representado dentro de uma div com a classe "livro". Dentro dessa div, há uma imagem representando a capa do livro, o título do livro, o autor, o preço, e uma tag de categoria.

// Os valores das propriedades de cada livro são utilizados para preencher os elementos HTML através de interpolação de string. Por exemplo, ${livro.imagem} representa o valor da propriedade imagem do objeto livro, e assim por diante.

// O conteúdo HTML gerado para cada livro é adicionado ao elemento identificado por inserirLivros. O inserirLivros.innerHTML += faz a concatenação do conteúdo HTML gerado para cada livro, adicionando-o ao conteúdo existente.

// Em resumo, esse código é responsável por exibir os livros na interface, utilizando os dados fornecidos pela lista de livros passada como argumento.
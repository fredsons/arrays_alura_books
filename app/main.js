let livros = []

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
  const res = await fetch(endpointDaApi)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivros(livrosComDesconto)
}

// Esse código está realizando as seguintes ações:

// Declara uma variável chamada livros e a inicializa como um array vazio.
// Define a constante endpointDaApi que armazena o URL do endpoint da API de onde os dados dos livros serão buscados.
// Chama a função getBuscarLivrosDaApi().
// Define uma função assíncrona chamada getBuscarLivrosDaApi().
// Dentro da função, utiliza o fetch para fazer uma requisição ao endpoint da API especificado em endpointDaApi e aguarda a resposta.
// Em seguida, utiliza o método json() na resposta para obter os dados no formato JSON.
// Atribui os dados obtidos à variável livros.
// Chama a função aplicarDesconto() passando os livros como argumento, retornando uma nova lista de livros com desconto.
// Chama a função exibirLivros() passando a lista de livros com desconto como argumento para exibir os livros na interface.
// Basicamente, o código faz uma requisição assíncrona para a API especificada, obtém os dados dos livros, aplica um desconto aos livros e exibe-os na interface.
// A variável livros é atualizada com os dados obtidos da API para ser usada posteriormente.
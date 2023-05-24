
// Declaração de variáveis
let livros = []; // Array vazio para armazenar os livros
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'; // URL da API de livros

// Chamada da função principal para buscar livros da API
getBuscarLivrosDaApi();

/**
 * Função assíncrona para buscar livros da API e exibi-los
 */
async function getBuscarLivrosDaApi() {
  // Realiza uma requisição fetch para obter os dados da API
  const res = await fetch(endpointDaApi);

  // Converte a resposta da API em formato JSON para obter os livros
  livros = await res.json();

  // Aplica um desconto nos preços dos livros
  let livrosComDesconto = aplicarDesconto(livros);

  // Exibe os livros na interface
  exibirLivros(livrosComDesconto);
}


// Nesse código, a função getBuscarLivrosDaApi é a função principal que busca os livros da API e realiza as etapas de conversão para JSON, aplicação de desconto e exibição dos livros. Ela é assíncrona e utiliza o await para aguardar as operações assíncronas serem concluídas.

// A variável livros é inicializada como um array vazio e será preenchida com os dados dos livros obtidos da API.

// O endpointDaApi é a URL da API que contém os dados dos livros.

// Após a busca dos livros da API, é chamada a função aplicarDesconto, que recebe a lista de livros como argumento e retorna uma nova lista com os preços dos livros com desconto.

// Por fim, a função exibirLivros é chamada para mostrar os livros na interface, recebendo a lista de livros com desconto como argumento.
import axios from "axios";

//A criação deste objeto faz com que eu não precise mais passar a rota inteira para obter os livros. A partir desse ponto a requisição só precisa ter a baseURL + /books
const api = axios.create({
	baseURL: "https://books-api-j138.onrender.com",
});
/*----------------------------------------------------------------------------*/
async function listarLivros() {
	try {
		const result = await api.get("/books");
		//Tratando o retorno
		const lista = result.data.data.map((item) => {
			return {
				id: item.id,
				title: item.title,
			};
		});
		//console.log(result.data.data);
		//log do retorno tratado
		console.log(lista);
	} catch (error) {
		console.log(error);
	}
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
// async function listarAutores() {
// 	try {
// 		const result = await api.get("/authors");
// 		console.log(result.data.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/*Nesta API o autor deve ser criado antes do livro */
// async function criarAutor(name) {
// 	try {
// 		const result = await api.post(`/authors`, name);
// 		console.log(result.data.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/*Função POST com body associado - Criar livro na API de livros
POST /books
*/
// async function criarLivro(dados) {
// 	try {
// 		const result = await api.post(`/books`, dados);
// 		console.log(result.data.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
// /*Obter livros pelo ID:
// GET /books/:id
// */
// async function obterLivrosPorId(id) {
// 	try {
// 		const result = await api.get(`/books/${id}`);
// 		console.log(result.data.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/*Chamadas das funções: */

// criarAutor({ name: "nomeDoAutor",});

// listarAutores();

// criarLivro({
// 	title: "Título do livro",
// 	resume:
// 		"Resumo do livro",
// 	totalPages: 0,
// 	isFavorite: true,
// 	authorId: "",
// });

listarLivros();

// obterLivrosPorId("00000");

/*----------------------------------------------------------------------------*/

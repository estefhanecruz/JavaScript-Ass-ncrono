import axios from "axios";
/* Exercício:

- Consumir a API do CEP para obter informações de um CEP específico
    - mostrar os dados do endereço no console
- Consumir a API de Livros da Growdev para atualizar um livro e testar os casos:
    - Caso de sucesso: Atualização de um livro existente;
    - Caso de erro: Atualização de um livro não existente;
    - Caso de erro: Atualização de livro sem passar os dados no body.
*/

/*1 - Consumir a API do CEP para obter informações de um CEP específico*/
async function exibirCEP(numero) {
	try {
		const result = await axios.get(`https://viacep.com.br/ws/${numero}/json/`);
		console.log(result.data);
	} catch (error) {
		console.log(error);
	}
}

exibirCEP(44500000);

/*--------------------------------------------------------------------------------- */
/*--------------------------------------------------------------------------------- */

/*2 - Consumir a API de Livros da Growdev para atualizar um livro e testar os casos:*/
async function atualizarLivro(id, dados) {
	try {
		const result = await axios.put(
			`https://books-api-j138.onrender.com/books/${id}`,
			dados
		);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

async function listarLivros() {
	try {
		const result = await axios.get("https://books-api-j138.onrender.com/books");
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

// atualizarLivro("e059b74d-cf36-4a53-84d8-83237dd88c28", {
// 	title: "A Terceira Margem do Rio",
// 	resume:
// 		"conta a história de um pai que abandona sua família para viver eternamente em uma canoa no meio de um rio, mantendo-se em constante movimento e nunca pisando nas margens. ",
// 	totalPages: 4,
// 	isFavorite: false,
// 	authorId: "a6b5539e-4b7f-4fbd-802b-ce641d026ae3",
// });

listarLivros();
/*--------------------------------------------------------------------------------- */

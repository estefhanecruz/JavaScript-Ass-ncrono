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
//PUT /books/id
async function atualizarLivro(id, dados) {
	try {
		const result = await axios.put(
			`https://books-api-j138.onrender.com/books/${id}`,
			dados
		);
		console.log(result.data);
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

atualizarLivro("442c7226-1944-4ebd-a197-d00da93a68f1", {
	title: "Memórias Póstumas De Brás Cubas",
	resume:
		"Memórias Póstumas de Brás Cubas, de Machado de Assis, é um romance narrado pelo defunto Brás Cubas, que, com ironia e sarcasmo, revisita sua vida, amores e fracassos.",
	totalPages: 368,
	isFavorite: false,
	authorId: "10c69b15-767f-487f-9b1c-68555a2b3f06",
});

listarLivros();
/*--------------------------------------------------------------------------------- */

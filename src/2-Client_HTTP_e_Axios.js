// Faz uma requisição de dados à API do Rick and Morty e depois exibe no terminal os dados do objeto .data
//Dessa vez usando async/await

import axios from "axios";

async function listarRickAndMorty() {
	try {
		const result = await axios.get("https://rickandmortyapi.com/api/character");
		console.log(result.data);
	} catch (error) {
		console.log(error);
	}
}
listarRickAndMorty();

// Faz uma requisição de dados à API do Rick and Morty e depois exibe no terminal os dados do objeto .data

import axios from "axios";

axios
	.get("https://rickandmortyapi.com/api/character")
	.then((result) => {
		console.log(result.data);
	})
	.catch((error) => {
		console.log(error);
	});

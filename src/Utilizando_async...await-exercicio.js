function obterClienteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Obter cliente na API");

      resolve({
        id: 1,
        nome: "Daphne",
        idade: 20,
      });
    }, 2000);
  });
}
function tratarClienteApi(cliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("tratar dados do cliente API");
      if (!cliente.nome) {
        reject("Nome do cliente ausente");
      }
      cliente.nome = cliente.nome.toUpperCase();
      resolve(cliente);
    }, 2000);
  });
}
//Obtendo o cliente com tratamento através de .then
obterClienteApi()
  .then(tratarClienteApi)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Obtendo o cliente sem tratar
async function executarObterCliente() {
  const result = await obterClienteApi();
  console.log(result);
}
executarObterCliente();

//Obtendo o cliente com tratamento através de async/await + tratamento de erros

async function tratarEObterCliente() {
  try {
    let result = await obterClienteApi();
    result = await tratarClienteApi(result);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
tratarEObterCliente();

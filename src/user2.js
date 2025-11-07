function obterClienteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Obter cliente na API");

      resolve({
        id: 1,
        nome: "Julia",
        idade: 25,
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

obterClienteApi()
  .then(tratarClienteApi)
  .then((clienteTratado) => {
    console.log(clienteTratado);
  })
  .catch((error) => {
    console.log(error);
  });

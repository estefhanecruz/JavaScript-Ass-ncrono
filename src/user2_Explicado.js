function obterClienteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Obter cliente na API");

      resolve({
        // AQUI o objeto do cliente é RESOLVIDO
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
      resolve(cliente); // AQUI o cliente TRATADO é RESOLVIDO
    }, 2000);
  });
}

// --- Encadeamento Reescrito ---

obterClienteApi()
  .then((clienteRecebido) => {
    // Passo 1: O valor RESOLVIDO de obterClienteApi()
    // é capturado na variável 'clienteRecebido'.

    console.log("-> Passando cliente para a função de tratamento...");

    // Passo 2: Chamamos explicitamente tratarClienteApi(),
    // passando o valor capturado como argumento.
    return tratarClienteApi(clienteRecebido);
  })
  .then((clienteTratado) => {
    // Passo 3: O valor RESOLVIDO da Promise retornada por
    // tratarClienteApi(clienteRecebido) é capturado em 'clienteTratado'.

    console.log("-> Cliente Tratado Recebido e Imprimido:");
    console.log(clienteTratado);
  })
  .catch((error) => {
    console.log(error);
  });

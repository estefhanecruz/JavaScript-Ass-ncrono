function obterClienteApi(callback){
    setTimeout(()=>{
        console.log("Obter cliente API");

        callback.call(null, {
            id: 1,
            nome: "Julia",
            idade: 26,
        });
    }, 2000);
}
function tratarClienteApi(cliente, callback){
    setTimeout(()=>{
        console.log("Tratar cliente API");

        cliente.nome = cliente.nome.toUpperCase();
        callback.call(null, cliente);
    },2000);
}

// Exemplo de Callback hell
obterClienteApi((result)=>{
    tratarClienteApi(result, (cliente)=>{
        console.log(cliente);
    });
});
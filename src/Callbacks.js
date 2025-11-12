function processoDemorado() {
  setTimeout(() => {
    console.log("Fiz o processo demorado depois de 2 seg");
  }, 2000);
}
processoDemorado();

console.log("Log pós processo demorado (Eu vou aparecer primeiro)");

/*Agora imagine que eu devo fazer uma função assíncrona, mas a ordem que elas aparecem deve ser respeitada. E agora?*/

function processoDemorado1(callback) {
  setTimeout(() => {
    console.log("Fiz o novamente processo demorado depois de 2 seg");
    callback.call();
  }, 2000);
}

function posProcessamento() {
  console.log("Eu sou o que acontece depois do processamento");
}
processoDemorado1(posProcessamento);

// A mesma função anterior só que usando arrow function
processoDemorado1(() => {
  console.log(
    "Eu sou igual ao pós processamento mas agora usei arrow function"
  );
});

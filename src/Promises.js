function processoDemorado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Oi, eu sou o processo demorado");
      resolve();
    }, 2000);
  });
}
processoDemorado()
  .then(() => {
    console.log("Log pós processo demorado");
  })
  .catch(() => {
    console.log("Captura de erro - Processo rejeitado");
  });

function processoDemorado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Processamento demorado!");
      resolve();
    }, 2000);
  });
}

async function executarProcessoDemorado() {
  await processoDemorado();
  console.log("Log pós processo demorado");
}
executarProcessoDemorado();

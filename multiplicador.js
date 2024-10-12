const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
  const numero = parseInt(num);
  
  if (isNaN(numero)) {
    console.log('Por favor, introduce un número válido.');
  } else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  rl.close();
});

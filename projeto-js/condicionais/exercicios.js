//peça a cor do semáfora ('"Verde"', '"amarelo"', '"vermelho"') e diga a ação.
//Exemplo: Verde siga. azul cor inválida.

// const semaforo = prompt("Qual a cor do semáforo?")

// if (semaforo == "verde") {
//     console.log("siga em frente")
// }else if (semaforo == "amarelo") {
//  console.log("Atenção")
//  }else if(semaforo ==="vermelho") {
//     console.log("Pare.");
//  } else {
//     console.log ("cor inválida")
//  }

/**
 0-100 <60 reprovado, 60-79 recuperação, 80-100 aprovado.
Exemplo: 75 Recuperação 105 Nota inválida.
 
 */

// const nota = Number(prompt("Nota (0-100):"));

//       if (Number.isNaN(nota) ||  nota < 0 || nota > 100 ) {
//          console.log ("Nota inválida.");
//       }else if (nota < 60) {
//          console.log("Reprovado!");
//       }else if (nota < 80) {
//          console.log("Recuperação!")
//       }else {
//          console.log("Aprovado!");
//       }

/**
 Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`
 */

//  const user = prompt("Usuário:");
//  const pass = prompt = ("Senha:");

//  const perfilOk = (user === "admin" || user === "gerente" );
//  const senhaOk = (pass === "1234");

//  if (perfilOk && senhaOk) {
//    console.log("Acesso liberado");
//  } else {
//    console.log("Acesso negado");
//  }

//Nível Fácil 
 //Classificador de Número
//Peça um número e diga se é positivo, negativo ou zero.
//**Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`

//1-)


//  const numero = Number(prompt("Digite um número:"));
//  if (Number.isNaN(numero)) {
//   console.log("Valor inválido!");
//  } else if (numero === 0) {
//   console.log("O número é zero");
//  }else if (numero >= 1) {
//   console.log (" o número é positivo!");
//  } else if (numero <= 0) {
//   console.log("O número é negativo!");
//  }


//2-)
//Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.

//**Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`


// const idade = Number(prompt("Qual é sua idade?"));
 
// if (Number.isNaN(idade) || idade < 0) {
//   console.log("Idade inválida!")
// } else if( idade >= 18 ) {
//   console.log ("Você pode tirar carteira de motorista.")
// }else if (idade <= 18) {
//   console.log("Você ainda não tem idade para dirigir.")
// }


//3-)

//Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.

//**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`

// const numero = Number(prompt("Digite um número:"));

// if(Number.isNaN(numero)) {
//   console.log("Número inválido!");
// }else if (numero % 2 === 0) {
//   console.log("O número é par.");
// }else {
//   console.log("O número é Impar.");
// }


// Nível Médio

//1-)

// const peso = Number(prompt("Digite seu peso em kg:"));
// const altura = Number(prompt("Digite sua altura em metros:"));
// const IMC = peso / (altura ** 2 )

// if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0 ) {
//   console.log("Valores de peso ou altura inválidos.");
// }else{
//   const imc = peso / (altura * altura);

//   console.log(`Seu IMC é:  ${imc.toFixed(2)}`);
//   if (imc < 18.5) {

//     console.log("Classificação: Abaixo do peso");
//   }else if (imc < 25) {
//     console.log("Classificação: Peso normal");
//   }else if(30) {
//     console.log("Classificação: Sobrepeso ");
//   }else  {
//     console.log("Classificação: Obesidade");
//   }
// }

//2-)
 
//Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

//**Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`

// const valor = Number(prompt("Digite o valor da compra:"));
// if (Number.isNaN(valor) || valor < 0) {
//   console.log("Valor inválido.")
// }else if(valor > 100) {
//   const desconto = valor * 0.1;
//   console.log("Valor final com desconto:"  +(valor - desconto));
// }else{
// console.log("Valor final: R$ " + valor)
// }


//Peça 3 números e diga qual é o maior.

//**Exemplo:** `4`, `9` e `7` → `O maior número é: 9`

const numero1 = Number(prompt("Digite o primeiro valor"));
const numero2= Number(prompt("Digite o segundo valor "));
const numero3 = Number(prompt("Digite o terceiro valor"));

if (Number.isNaN(numero1)|| Number.isNaN(numero2)|| Number.isNaN(numero3)) {
  console.log("Número inválido, por favor digite outro número.");
}else{
  let maior = numero1;
  if (numero2 > maior) maior = numero2;
  if(numero3 > maior) maior = numero3;
  console.log ("O maior número é:" + maior)
}



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

//       if (Number.isNaN(nota) || nota < 0 || nota > 100 ) {
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

 const user = prompt("Usuário:");
 const pass = prompt = ("Senha:");

 const perfilOk = (user === "admin" || user === "gerente" );
 const senhaOk = (pass === "1234");

 if (perfilOk && senhaOk) {
   console.log("Acesso liberado");
 } else {
   console.log("Acesso negado");
 }
// // Arrays Arrays - lista de valores com índice

// const frutas = ["Maça","Banana", "Laranja"];

// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(frutas.length);

// frutas.push("Uva");
// console.log(frutas);

// //Objetivos - conjunto de chave e valor
// const pessoa = [
//     {nome:"Felipe", idade: 16}
// ]

// console.log(pessoa.nome);
// pessoa.cidade = "São Paulo"

// //while

// let i = 1;

// while (i <= 5) {
//     console.log("Número: " + i);
//     i++
// }

// do...while

// let senha;

// do {
//     senha = prompt("Digite a senha:");
// } while (senha !== "1234");

// //For
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// //Contagem regressiva
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }
// console.log("Fogo!!");

//Acumulador: somando dentro do loop

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
    
//     soma += i;
// }

// console.log(soma);

//for..of
// const frutas = ["Maça", "Banana", "Laranja"];

// for (const fruta of frutas) {
//     console.log("Frutas:", fruta);
// }

//for...in


// const pessoa = {nome:"Felipe",idade: 16, cidade: "Recife"};

// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`)
// }

//Laço dentro de laço
// for (let linha = 1; linha <= 3; linha++) {
//     let texto = "";

//     for (let coluna = 1; coluna <=4; coluna++) {
//         texto += "* ";

//     }
//     console.log(texto);
// }


// for (let linha = 1; linha <= 4; linha++){
//     let texto = "";

//     for (let coluna = 1; coluna <= linha; coluna++) {
//         texto += "* "
//     }
//     console.log(texto);
// } 
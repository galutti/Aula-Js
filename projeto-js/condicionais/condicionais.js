const temperatura = 35;

if (temperatura > 30) {
    console.log ("Está calor!!");
}

console.log("Fim do programa!");

const idade = Number(prompt("Sua idade:"));

if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade inválida!");
    } else {
if (idade >= 18) {
    console.log("Maior de idade !!")

 } else {
    console.log("Menor de idade!!")


}
}
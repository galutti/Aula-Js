//Linguagem Interpretada
//NodeJs
//Tipagem fraca
/*
 let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "ola, mundo!!";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto ="20";
let resultado = numero + texto;

console.log(resultado);
 */

//variável

//let palavra que cria a variável
//const palavra que cria a variável
//var palavra que cria a variável 
//let idade = 16;
//idade nome (etiqueta)
//=  (atribuição)
//16 valor
/**
let nome = "Felipe";
let idade1 = 16;

console.log(nome);
console.log(idade1);
console.log(idade1 + 1);
console.log("Olá, " + "!";

    idade1 = 30;

    const idade2 = 16;
    idade2=26;
 */


    //Case Sensitive

    /**
     let nome = "Felipe"
    let nome = "Maria"
    let nome = "João"


    console.log(nome)
    console.log(nome)
     console.log(nome)
     */

     //Palavra Reservadas
     //let,const,var, if, else, for, while, function,return, class, new, switch, case
     //let if = "teste";

     //Regras do nomenclatura
     //Pode começar com letra,_ ou $
     //Pode conter:letras,números, _ ou $
     /**
      let idade =  20;
     idade = 21;
     console.log(idade);

     const PI = 3.14159;

     vonst total = 150;

     if (total > 100) {
        var desconto = 10;
        let frete = 0;
     }

     console.log(desconto)
      */
     
     //Tipos Primitivos

     /**
      const preco = 19.9;
     console.log (typeof preco);

     const name = "Lucas";
     console.log(typeof nome);

     const ativo = true;
     console.log(typeof ativo);

     const vazio = null;
     console.log(typeof vazio);

     let indefinido;
     console.log(typeof indefinido)
      */

      /**
        strings e Template Literals
    const name1 = "Felipe";
     const name3 = "João";

    const nomeCompleto = " Felipe Rodrigues Galutti";

     console.log(nomeCompleto.length);
     console.log(nomeCompleto.toUpperCase());
     console.log(nomeCompleto.toLowerCase());

     console.log(`Ola, meu nome é {nomeCompleto} e tenho ${idade} anos. ´)
     
       */

    /**
      conversões de Tipo
    console.log(Number("123"));
    console.log(parseInt("10.9"));
    console.log(parseFloat("10.9"));
    console.log(String(123));

    console.log(Boolean(0));
    console.log(Boolean(1));
    console.log(Boolean (""));

    const texto1 = prompt("Digite um número:");
    const texto = Number(prompt("Digite um numero"));

    console.log(texto + 5);
    Arredondamento e formatando Números
     */
   
    
  

    /**
     Operadores Aritmeticos
    console.log(2 +3);
    console.log(5 - 2);
    console.log(4 * 2);
    console.log(10 / 2);
    console.log(10 % 3)
    console.log(2 ** 3);
     */
    
    /**
     Operadores de Comparação 
   console.log(5 == "5"); // igual frouxo
   console.log(5 == "5"); // igual frouxo  

    console.log(5 === "5"); // igual estrito
    console.log(5 == 5) // igual estrito

    console.log(5 != "5") //diferente frouxo
     console.log(5 != 7) //diferente frouxo

     console.log(5 !== "5") //diferente estrito
     console.log(5 !==7) //diferente estrito
     */

   // Média de duas notas
     const n1 = Number(prompt("Primeira nota:"));
     const n2 = Number(prompt ("Segunda nota:"));

     const media = (n1 + n2) / 2;

     console.log(`média: ${media.toFixed(1)}`);

     //IMC (Indice de Massa Corporal)
     const peso = Number(prompt("Digite seu peso (Kg);"));
     const altura = Number(prompt ("Altura (m):"));

    


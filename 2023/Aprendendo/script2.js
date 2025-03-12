

//podemos dar valor defalt para argumentos que estão indo para função e também quando não estão indo

function escreve(nome = "Sem nome")
{
    console.log(nome);
}

nome = "igor";
escreve(nome);
escreve();

//Tem como uma variavel virar uma função
function guardarsoma(num){
    return function (num2){
        return num+num2;
    }
}

let soma =guardarsoma(5);
console.log(soma(5));







function primo(numero) {
    let contador = 0;
    for (let x = 1; x <= numero; x++) {
        if (numero % x == 0) {
            contador++;
        }
        if (x == numero && contador == 2) {
            return true;
        } else if (x == numero && contador != 2) {
            return false;
        }
    }
}

let primo2 = (numero) =>{
    let contador = 0;
    for (let x = 1; x <= numero; x++) {
        if (numero % x == 0) {
            contador++;
        }
        if (x == numero && contador == 2) {
            return true;
        } else if (x == numero && contador != 2) {
            return false;
        }
    }
}




let teste=5
if (primo(teste)==true)
    console.log("Primo");
else
    console.log("Não Primo");


teste = 10;
if (primo2(teste)==true)
    console.log("Primo");
else
    console.log("Não Primo");



let idade = 2;
if (idade>=18){
    console.log("Pode entrar");
}else{
    console.log("Não pode entrar");
}

console.log(Math.pow(idade,2));

idade = 19;
let CNH = false;

if  (idade>=18 && CNH==true){
    console.log("Pode dirigir");
} else if (idade>=18 && CNH!=true){
    console.log("Não pode dirigir, mas pode tirar carteira");
} else{
    console.log("Não pode dirigir e nem tirar carteira");
}

let x=1;

while(x<=10){
    console.log(x);
    x++;
}

console.log("\n");

for (let x=100; x>=50; x--)
{
    console.log(x);
}

console.log("\n");

for (let x=0; x<=50; x++)
{
    if (x%2==0){
        console.log(`${x} é par`);
    } else{
        console.log(`${x} é impar`);
    }
}


let n=5
if (true){
    let n=14343;
    console.log(n);
    if (true){
        let n=345;
        console.log(n);
    }
}

console.log(n);

// DENTRO DE UM OBJ (STRUCT) PODEMOS CRIAR UMA FUNÇÃO E CHAMALA IGUAL NO EXEMPLO A BAIXO
let pessoa ={
    nome: "Igor",
    idade: 20,
    cidade: "Dourados",
    CNH: function (){
        if (pessoa.idade>=18)
            console.log("Pode tirar CNH")
        else
            console.log("Não pode tirar CNH")
    }
};

pessoa.idade = 10; //atribuindo novo valor para a idade dentro do objeto (struct)

pessoa.estado = "CASADO!"; //atribuindo nova unidade no objeto (struct) já declarada

console.log(pessoa);
console.log(pessoa.nome);


//PARA MOSTRAR QUE PODEMOS REALIZAR A JUNÇÃO DE DOIS OBJETOS(STRUCT)
let igor ={
    sexo_igor: "M"
};

let agatha ={
    sexo_agatha: "F"
};

Object.assign(igor,agatha);
console.log(igor);


//
let carro ={
    marca: "FIAT",
    ano: 2013
}

console.log(Object.keys(carro)); //retorna um vetor com os dados do objeto ()
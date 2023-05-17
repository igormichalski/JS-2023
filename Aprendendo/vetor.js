let pessoa ={
 nome:"igor",
 peso: 70
}

let pessoa2 = pessoa;

let pessoa3 ={
 nome:"igor",
 peso: 70
}

console.log(pessoa2==pessoa);
console.log(pessoa2==pessoa3);

//Aula x
let igor = [2,34,5,4];
for (let i = 0; i<igor.length; i++)
{
 console.log(igor[i]);
}

//Pop Remove, Push Adiciona item no ultimo ponto do vetor
let nome = ["Igor", "Roberto", "Michalski"];
console.log(nome);

let nome_removido = nome.pop();
console.log(nome_removido);

nome.push("Souza");
console.log(nome);


//Shift Remove, Unshift Adiciona item no primeiro ponto do vetor
let carro =["porta", "motor", 284];
console.log(carro);

let carro_removido = carro.shift();
console.log(carro_removido);

carro.unshift("Teste de pipi");
console.log(carro);


//indexOf procura no vetor a primeira aparição
//lastindexOf procura no vetor  a ultima aparição
let numeros = [7,5,4,4,5,8,9,5,87,5,8,9];

console.log(numeros.indexOf(5));
console.log(numeros.lastIndexOf(5));

//Testeando Slice
let exe = [1,11,2,5,6,8,4];
console.log(exe.slice(1,3));
console.log(exe.slice(-5)); //Com numeros negativos podemos pegar de tras para frente


//lendo valores de um vetor como se fosse FOR
let conjunto = [1,2,5,6,8,4,1,2,5,6];
conjunto.forEach(x => {
 console.log(x);
 });


//Verifica se tem algo dentro do vetor INCLUDES
let Moah= [8,5,6,8,4,4,1,2,54];
console.log(Moah.includes(4));

//Inverter o vetor
let car = ["Audi", "BMW", "Ford", "Fiat"];
car_reverse= car.reverse();
console.log(car_reverse);



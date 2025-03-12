let x=0;
while(x<5)
{
    console.log(x);
    x += 1;
}

x=0;
do{
    x +=1;
    console.log(x);
}while(x<2);

console.log("'Primeiro'");
console.log('"Segundo"');
console.log(`Literals é usar crases no lugar das aspas simples ou duplas para dar um print`);
console.log((2+4+6)/3);
console.log(1);
console.log(2.3);
console.log(2>3);
console.log(3<2);
console.log(32==23);
console.log("34"===34);
console.log(32==23 || 23<32);

let laranja = 5;
console.log(laranja);
laranja++;
console.log(`Tem ${laranja} laranjas na sexta`);


for (let x= 1; x<=7; x++)
{
    console.log(x);
    if (x===4)
    {
        console.log("Numero 4");
    }
}

console.log(Math.max(3,56,7,234,3+42345));
console.log(Math.min(3,56,7,234,3+42345));
console.log(Math.round(43.464345));
// let nome = prompt("Digite seu nome:");
// console.log(nome);
// alert("Desligue seu Adblock");


if (Math.max(3,56,7,234,3+42345) == 3)
{
    console.log("isso nunca vai rodar");
}else
{
    console.log("se não");
}


let nome = prompt("Digite seu nome");

if (nome == "igor" && nome.length==4)
{
    console.log("isso nunca vai rodar");
}else if (nome == "Igor" || nome.length==4) //nome.length retorna o tamanho da string
{
    console.log("se não");
}
else
{
    console.log("se não 2");
}
console.log(nome.length);



let igor="igor";
let x=5;
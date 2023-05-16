 function idade(x, y){
  console.log(`Idade = ${x+y}`);
 }

 function aleatrorio(x){
 return Math.floor(Math.random() * x + 1);
 }

 function tipo(x){
  if (typeof x === "string")
   console.log("String");
  else if (typeof x === "boolean")
   console.log("Boolean");
  else
   console.log("Numero");
 }

 function trocasinal(x){
 return Math.abs(x);
 }

 function medidor(x){
 if (x.length>10)
  console.log("Testo grande da porra");
 else
  console.log("menor que meu pinto");
 }

function elevado(x,y){
 return Math.pow(x, y);
}


 console.log(aleatrorio(4));
 idade(20,2);
 tipo("igor");
 tipo(2);
 tipo(4<2);
 console.log(trocasinal(22));
 medidor("Igor ");
console.log(elevado(10,2));

let  i=1;

while(i<= 40)
{
 if (i%4==0)
  console.log("Pin");
 else
 console.log(i);
 i++;
}

let vetor= [2, "igor", 54, 3];
for (let i=3; i>=0; i--)
{
 console.log(vetor[i]);
}
console.log(vetor[vetor.length - 1]);
console.log(vetor.length);

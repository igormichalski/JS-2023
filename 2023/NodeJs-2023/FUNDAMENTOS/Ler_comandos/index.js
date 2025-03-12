
console.log(process.argv)

const agrs = process.argv.slice(2)
const nome = agrs[0].split('=')[1]
const carro = agrs[1].split('=')[1]


console.log(`O nome deçe é ${nome} e ele tem um ${carro}!`)
const pessoa = {
    nome: 'Alice',
    sobrenome: 'Johnson',
    idade: 25,
}

for (const key in pessoa) {
    console.log(`\nChave: ${key}`)
    console.log(`Valor: ${pessoa[key]}`)
}

const iteracao = Object.keys(pessoa).forEach((key) => { 
    console.log(`\nChave: ${key}`)
    console.log(`Valor: ${pessoa[key]}`)
})
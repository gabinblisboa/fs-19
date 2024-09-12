// Questao 13

const nums = [1,2,3,4,5]

// Primeira forma

const doubleNums = nums.map((num) => num * 2)
console.log(doubleNums)


// Segunda forma
for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2
}
console.log(nums)

// Questao 14

const nums = [1,2,3,4,5]

const pessoa = {
    nome: 'Alice',
    sobrenome: 'Johnson',
    idade: 25,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123,
        cidade: 'Cidade do Amor',
        estado: 'SP',
    },
    telefones: ['99 9999-9999', '99 9999-9999'],
}

// Spread / Rest (...)

const { endereco, ...rest } = pessoa
const spread = { ...rest, ...endereco}

console.log(spread)

// Iteracao em objetos
// Key: value
for (const key in pessoa) {
    console.log(pessoa[key])
}


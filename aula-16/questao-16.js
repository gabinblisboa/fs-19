const array = [
    { nome:'Fulano', idade: 30 },
    { nome:'Fulano', idade: 30 },
    { nome:'Fulano', idade: 30 },
    { nome:'Fulano', idade: 30 },
]

for (const item of array) {
    console.log(item.nome)
}

array.forEach((item) => console.log(item.nome))
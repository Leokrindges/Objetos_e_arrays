// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.


const aluno01 = {
    nome: 'John',
    nota01: 5,
    nota02: 6
}

const aluno02 = {
    nome: 'Mary',
    nota01: 4.5,
    nota02: 7.8
}

let mediaAluno01 = (aluno01.nota01 + aluno01.nota02) / 2
let mediaAluno02 = (aluno02.nota01 + aluno02.nota02) / 2
let mediaTurma = (mediaAluno01 + mediaAluno02) / 2
console.log(aluno01.nome)
console.log(`Nota 01: ${aluno01.nota01}`)
console.log(`Nota 02: ${aluno01.nota02}`)
console.log(`Média: ${mediaAluno01}`)

console.log(aluno02.nome)
console.log(`Nota 01: ${aluno02.nota01}`)
console.log(`Nota 02: ${aluno02.nota02}`)
console.log(`Média: ${mediaAluno02}`)

console.log(`Média da turma: ${mediaTurma.toFixed(2)}`)
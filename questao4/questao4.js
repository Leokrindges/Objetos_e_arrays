// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let continuar = 'S'
let salarioMenor = []
let salarioMaior = []
let desempregado = []

while (continuar === 'S' || continuar === 's') {

    const usuario = {
        nome: prompt('Qual o seu nome?'),
        idade: Number(prompt('Digite sua idade')),
        empregado: prompt('Empregado?[S/N]'),
        salario: 0
    }

    if (usuario.empregado === 'S' || usuario.empregado === 's') {
        usuario.salario = Number(prompt('Qual seu salário?'))
    }

    if (usuario.empregado === 'S' || usuario.empregado === 's' && usuario.salario < 2500) {
        salarioMenor.push(usuario)
    } else if (usuario.empregado === 'S' || usuario.empregado === 's' && usuario.salario > 2500) {
        salarioMaior.push(usuario)
    } else if (usuario.empregado === 'N' || usuario.empregado === 'n') {
        desempregado.push(usuario)
    }

    continuar = prompt('Deseja continuar? [S/N]')
}

console.log('Usuários com salário maior que 2500:');
for (const user of salarioMaior) {
    console.log(`Nome: ${user.nome}, Idade: ${user.idade}, Salário: ${user.salario.toFixed(2)}`);
}

console.log('Usuários com salário menor que 2500:');
for (const user of salarioMenor) {
    console.log(`Nome: ${user.nome}, Idade: ${user.idade}, Salário: ${user.salario.toFixed(2)}`);
}

console.log('Usuários desempregados:');
for (const user of desempregado) {
    console.log(`Nome: ${user.nome}, Idade: ${user.idade}`);
}
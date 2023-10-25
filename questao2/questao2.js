// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

const notebook = {
    processador: "i7",
    memoria: 16,
    preco: 5000,
    hd: 1,
    ssd: 256
}

console.log(`Processador: ${notebook.processador}`)
console.log(`RAM: ${notebook.memoria}GB`)
console.log(`Preço: R$ ${notebook.preço.toFixed(2)}`)
console.log(`HD: ${notebook.hd}TB`)
console.log(`SSD: ${notebook.ssd}GB`)
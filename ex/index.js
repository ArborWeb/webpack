const produto = {
	nome: 'Caneta BIC Preta',
	preco: 1.90,
	desconto: 0.05
}

function clone(objeto) {
	return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta BIC Azul'
novoProduto.preco = 2

console.log(produto, novoProduto)
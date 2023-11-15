function adicionarCarrinho(botao){
    let nomeProduto = botao.parentElement.parentElement.querySelector('.card-title')
    let precoProduto = botao.parentElement.parentElement.querySelector('.text-title')

    nomeProduto = nomeProduto.innerText
    nomeProduto = precoProduto.innerText

    adicionarLocalStorage('carrinho',nomeProduto,precoProduto)
}

function adicionarfavorito(botao){
    let nomeProduto = botao.parentElement.parentElement.querySelector('.card-title')
    let precoProduto = botao.parentElement.parentElement.querySelector('.text-title')

    adicionarLocalStorage('favorito',nomeProduto,precoProduto)
}

function adicionarLocalStorage(tipo,nome,preco){

    let array = []
    array.push(nome,preco)

    console.log(array)

    localStorage.setItem(tipo, JSON.stringify(array));
}


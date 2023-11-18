function adicionarCarrinho(botao){
    let nomeProduto = botao.parentElement.parentElement.querySelector('.card-title')
    let precoProduto = botao.parentElement.parentElement.querySelector('.preco')

    adicionarLocalStorage('carrinho',nomeProduto.innerText,precoProduto.innerText)
}

function adicionarfavorito(botao){
    let nomeProduto = botao.parentElement.parentElement.querySelector('.card-title')
    let precoProduto = botao.parentElement.parentElement.querySelector('.preco')

    adicionarLocalStorage('favorito',nomeProduto.innerText,precoProduto.innerText)
}

function adicionarLocalStorage(tipo,nome,preco){

    arrayArmazenado = JSON.parse(localStorage.getItem(tipo));

    if (arrayArmazenado === null){
    
        let array= []

        array.push({nome,preco})

        localStorage.setItem(tipo, JSON.stringify(array));
    }

    else{
        const produtoDuplicado = arrayArmazenado.find(element =>element.nome ===  nome && element.preco === preco)

        if(!produtoDuplicado){

            arrayArmazenado.push({nome,preco})

            localStorage.setItem(tipo, JSON.stringify(arrayArmazenado));
        } else {
            alert(`Este produto já foi adicionado no ${tipo}`);
        }
    } 
}

function alterarNome(){
    const nomeDeLogin = JSON.parse(localStorage.getItem("user"));
    const nome = document.getElementById("nome")
    nome.innerHTML = `Olá, ${nomeDeLogin}`
}

alterarNome()
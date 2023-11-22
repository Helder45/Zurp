const checkOutBtn = document.getElementById("checkOutBtn");
const itemsTotal = document.getElementById("itemsTotal");
const products = document.getElementsByClassName("card");

window.onload = addTotal;

document
  .getElementById("principal")
  .addEventListener("load", validarVazio());


function addTotal() {
  itemsTotal.textContent = `Total de produtos: ${products.length}.`;
}

function apagarCard(botao){
  botao.parentNode.parentNode.remove();
  addTotal();
  atualizarLocalStorage();
}

function atualizarLocalStorage() {

  const itemsCarrinho = document.getElementById("coluna");
  const items = [];

  for (let i = 0; i < itemsCarrinho.children.length; i++) {
      const item = itemsCarrinho.children[i]; 
      items.push({
          nome: item.firstChild.firstChild.textContent,
          preco: item.firstChild.children[1].textContent
      });
  }

  localStorage.setItem("carrinho", JSON.stringify(items));
}

checkOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (products.length === 0) {
    alert("Adicione itens no carrinho para poder prosseguir!");
  } else{
    alert("Processando... Você será redirecionado em instantes!");
  }
});

function pegarLocalStorage() {
  const coluna = document.getElementById("coluna");

  let itemsLocalStorage = JSON.parse(localStorage.getItem("carrinho"));

    for (let items = 0; items < itemsLocalStorage.length; items++) {
      //creating elements
      let cardDiv = document.createElement("div");
      let cardBodyDiv = document.createElement("div");
      let cardTitle = document.createElement("h5");
      let cardText = document.createElement("p");
      let cardBtn = document.createElement("button");

      //setting attributes
      cardDiv.setAttribute("class", "card my-2");

      cardBodyDiv.setAttribute("class", "card-body");

      cardTitle.setAttribute("class", "card-title");

      cardText.setAttribute("class", "card-text");

      cardBtn.setAttribute("class", "btn btn-danger deleteBtn");

      cardBtn.setAttribute("onclick", "apagarCard(this)")

      cardBtn.textContent = "Excluir";

      //putting the values into the variables
      cardTitle.textContent = itemsLocalStorage[items].nome;
      cardText.textContent = itemsLocalStorage[items].preco;

      //putting together all elements
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardText);
      cardBodyDiv.appendChild(cardBtn);
      cardDiv.appendChild(cardBodyDiv);
      coluna.appendChild(cardDiv);
    }
}

function validarVazio() {

  let itensLocalStorage = JSON.parse(localStorage.getItem("carrinho"));

  if (itensLocalStorage === null || itensLocalStorage.length === 0) {
    alert("Não há itens no carrinho!");
  } else {
    pegarLocalStorage();
  }

}

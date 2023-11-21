const checkOutBtn = document.getElementById("checkOutBtn");

window.onload = addTotal;

document
  .getElementById("principal")
  .addEventListener("load", pegarLocalStorage());

const itemsTotal = document.getElementById("itemsTotal");
const products = document.getElementsByClassName("card");

function addTotal() {
  itemsTotal.textContent = `Total de produtos: ${products.length}.`;
}

function apagarCard(botao){
  botao.parentNode.parentNode.remove();
  addTotal();
  atualizarLocalStorage();
}

function atualizarLocalStorage() {

  const itemscarrinho = document.getElementById("coluna");
  const items = [];

  console.log(itemscarrinho);

  for (let i = 0; i < itemscarrinho.children.length; i++) {
      const item = itemscarrinho.children[i];
      items.push({
          nome: item.textContent,
          concluida: item.classList.contains("concluida")
      });
  }

  localStorage.setItem("carrinho", JSON.stringify(items));
}

checkOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Processando... Você será redirecionado em instantes!");
});

function pegarLocalStorage() {
  const coluna = document.getElementById("coluna");

  let itemsLocalStorage = JSON.parse(localStorage.getItem("carrinho"));

  if (itemsLocalStorage === null || itemsLocalStorage.length === 0) {
    alert("Não há itens no carrinho!");
  } else {
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

      cardTitle.textContent = itemsLocalStorage[items].nome;
      cardText.textContent = itemsLocalStorage[items].preco;

      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardText);
      cardBodyDiv.appendChild(cardBtn);
      cardDiv.appendChild(cardBodyDiv);
      coluna.appendChild(cardDiv);
    }
  }
}

document
  .getElementById("principal")
  .addEventListener("load", validarVazio());

function apagarCard(botao){
  botao.parentNode.parentNode.remove();
  atualizarLocalStorage();
}

function atualizarLocalStorage() {

  const itemsFavorito = document.getElementById("coluna");
  const items = [];

  for (let i = 0; i < itemsFavorito.children.length; i++) {
      const item = itemsFavorito.children[i]; 
      items.push({
          nome: item.firstChild.firstChild.textContent,
          preco: item.firstChild.children[1].textContent
      });
  }

  localStorage.setItem("favorito", JSON.stringify(items));
}

function validarVazio() {

  let itensLocalStorage = JSON.parse(localStorage.getItem("favorito"));

  if (itensLocalStorage === null || itensLocalStorage.length === 0) {
    alert("Não há itens nos favoritos!");
  } else {
    pegarLocalStorage();
  }

}


function pegarLocalStorage() {
  const coluna = document.getElementById("coluna");

  let itemsLocalStorage = JSON.parse(localStorage.getItem("favorito"));

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

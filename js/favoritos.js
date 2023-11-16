window.onload = deleteExecution;

let deleteBtns = document.getElementsByClassName("deleteBtn");

document
  .getElementById("principal")
  .addEventListener("load", pegarLocalStorage());

function deleteExecution() {
  for (i = 0; i < deleteBtns.length; i++) {
    (function (index) {
      deleteBtns[i].addEventListener("click", function () {
        removeCard(index);
      });
    })(i);
  }
}

function removeCard(element) {
  console.log(element);
  deleteBtns[element].parentNode.parentNode.parentNode.remove();

  for (i = 0; i < deleteBtns.length; i++) {
    objclone = deleteBtns[i].cloneNode(true);
    deleteBtns[i].parentNode.replaceChild(objclone, deleteBtns[i]);
  }
  deleteExecution();
}

function pegarLocalStorage() {
  //Mudar estrutura HTML, para grid
  const coluna = document.getElementById("coluna");

  let itemsLocalStorage = JSON.parse(localStorage.getItem("favorito"));

  if (itemsLocalStorage === null) {
    alert("Não há itens nos favoritos!");
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

const checkOutBtn = document.getElementById("checkOutBtn");

(window.onload = deleteExecution), addTotal;

document
  .getElementById("principal")
  .addEventListener("load", pegarLocalStorage());

const itemsTotal = document.getElementById("itemsTotal");
const products = document.getElementsByClassName("card");

let deleteBtns = document.getElementsByClassName("deleteBtn");

itemsTotal.addEventListener("load", addTotal());

function addTotal() {
  itemsTotal.textContent = `Total de produtos: ${products.length}.`;
}

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
  deleteBtns[element].parentNode.parentNode.remove();

  for (i = 0; i < deleteBtns.length; i++) {
    objclone = deleteBtns[i].cloneNode(true);
    deleteBtns[i].parentNode.replaceChild(objclone, deleteBtns[i]);
  }
  addTotal();
  deleteExecution();
}

checkOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Processando... Você será redirecionado em instantes!");
});

function pegarLocalStorage() {
  const coluna = document.getElementById("coluna");

  let itemsLocalStorage = JSON.parse(localStorage.getItem("carrinho"));

  if (itemsLocalStorage === null) {
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

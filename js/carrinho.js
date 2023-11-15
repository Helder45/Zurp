const checkOutBtn = document.getElementById("checkOutBtn");

window.onload = deleteExecution;

const itemsTotal = document.getElementById("itemsTotal");
const products = document.getElementsByClassName("card");
deleteBtns = document.getElementsByClassName("deleteBtn");

itemsTotal.addEventListener("load", () => {
  //por localStorage o LocalStorage que vai ser responsavel por navegar dados entre paginas
  //isso mesmo

  //certo então quando clicar em comprar vou estar colocando no local storage?
  //ata blz
  //vou estar fazendo aqui então
  //blz, bom trabalho meu mano
  // deixa eu comm
  mitar primeiro
});

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
  deleteBtns[element].parentNode.parentNode.remove();

  for (i = 0; i < deleteBtns.length; i++) {
    objclone = deleteBtns[i].cloneNode(true);
    deleteBtns[i].parentNode.replaceChild(objclone, deleteBtns[i]);
  }
  deleteExecution();
}

checkOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Processando... Você será redirecionado em instantes!");
});

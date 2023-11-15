const checkOutBtn = document.getElementById("checkOutBtn");

window.onload = deleteExecution, addTotal;
// window.onload = addTotal;

const itemsTotal = document.getElementById("itemsTotal");
const products = document.getElementsByClassName("card");
deleteBtns = document.getElementsByClassName("deleteBtn");

itemsTotal.addEventListener("load", addTotal());

function addTotal() {
  console.log(products);
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
  console.log(element);
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

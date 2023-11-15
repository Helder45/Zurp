window.onload = deleteExecution;

deleteBtns = document.getElementsByClassName("deleteBtn");

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
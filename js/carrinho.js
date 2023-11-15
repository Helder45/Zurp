// Just creating

const finalizarBtn = document.getElementById("finalizarBtn");

finalizarBtn.addEventListener("click", (page) => {
    page.preventDefault();

    alert("Processando... Você será redirecionado em instantes!");
});
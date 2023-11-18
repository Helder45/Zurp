function logar(){

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if(usuario != "" && senha != ""){
        location.href = "html/produtos.html";
        logarNoLocalStorage();
    }else{
        alert('Usuário ou senha inválido');
    }

}

function logarNoLocalStorage(){

    let nomeDeUsuario = document.getElementById("usuario").value;

    localStorage.setItem("user", JSON.stringify(nomeDeUsuario));

}
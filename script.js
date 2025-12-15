const Erro = document.getElementById("error");
const Botao = document.getElementById("Button");
const Forget = document.getElementById("forget")

Botao.addEventListener("click", function() {
    const Nome = document.getElementById("Nome").value
    .toLowerCase()
    .replace(/\s+/g, "");
    const Senha = document.getElementById("Senha").value.replace(/\s+/g, "");

    if (Nome === "naomi" && Senha === "0811") {
        window.location.href = "casos/index.html";
    } else {
        Erro.style.display = "block";
    }
});

Forget.addEventListener("click", function() {
    alert("IbisPaint")
});


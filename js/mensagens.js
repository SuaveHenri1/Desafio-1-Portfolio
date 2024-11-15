document.addEventListener("DOMContentLoaded", () => {
    const mensagensConteiner = document.getElementById("mensagens-conteiner");

    function loadMensagens() {
        const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
        mensagensConteiner.innerHTML = "";

        if (mensagens.length === 0) {
            mensagensConteiner.innerHTML = "<p>Não há mensagens no momento.</p>";
            return;
        }

        mensagens.forEach((mensagem, index) => {
            const mensagemDiv = document.createElement("div");
            mensagemDiv.classList.add("mensagem");

            mensagemDiv.innerHTML = `
                <p><strong>Nome:</strong> ${mensagem.nome}</p>
                <p><strong>Email:</strong> ${mensagem.email}</p>
                <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
                <p><strong>Data:</strong> ${mensagem.data}</p>
                <button class="apagar-button" data-index="${index}">Apagar</button>
            `;

            mensagensConteiner.appendChild(mensagemDiv);
        });

        document.querySelectorAll(".apagar-button").forEach((botao) => {
            botao.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                apagarMensagem(index);
            });
        });
    }

    function apagarMensagem(index) {
        const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
        mensagens.splice(index, 1);
        localStorage.setItem("mensagens", JSON.stringify(mensagens));
        loadMensagens();
    }

    loadMensagens();
});
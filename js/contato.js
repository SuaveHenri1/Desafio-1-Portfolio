document.addEventListener('DOMContentLoaded', () => {
    const contatoForm = document.getElementById('contato-form');
    
    contatoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

        const novaMsg = {
            nome: nome,
            email: email,
            mensagem: mensagem,
            data: new Date().toLocaleDateString()
        };

        mensagens.push(novaMsg);
        localStorage.setItem("mensagens", JSON.stringify(mensagens));

        alert("Mensagem enviada!");
        contatoForm.reset();
    });
});
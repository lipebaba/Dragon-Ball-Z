// Alternar tema claro/escuro
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('claro');
    document.body.classList.toggle('escuro');
});

// Abrir detalhes do personagem
function abrirPersonagem(personagem) {
    window.location.href = `personagem.html?personagem=${personagem}`;
}

// Abrir modal de trailer
function assistirTrailer(url) {
    const modal = document.getElementById('trailer-modal');
    const video = document.getElementById('trailer-video');
    video.src = url;
    modal.style.display = 'flex';
}

// Fechar modal
function fecharModal() {
    const modal = document.getElementById('trailer-modal');
    const video = document.getElementById('trailer-video');
    video.src = '';
    modal.style.display = 'none';
}

// Validação do formulário
function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && mensagem) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        document.getElementById('form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

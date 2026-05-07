const sidebar = document.getElementById('sidebar');
const logoToggle = document.getElementById('logo-toggle');
const openBtn = document.getElementById('open-sidebar');

// Função para fechar a sidebar ao clicar na logo
logoToggle.addEventListener('click', () => {
    sidebar.classList.add('collapsed');
    
    // Mostra o botão flutuante após a animação de fechar
    setTimeout(() => {
        openBtn.style.display = 'flex';
    }, 300);
});

// Função para abrir a sidebar ao clicar no botão flutuante
openBtn.addEventListener('click', () => {
    sidebar.classList.remove('collapsed');
    openBtn.style.display = 'none';
});

// Opcional: Fechar menu com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !sidebar.classList.contains('collapsed')) {
        logoToggle.click();
    }
});
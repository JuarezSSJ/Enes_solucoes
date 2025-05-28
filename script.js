// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Botão "Voltar ao Topo"
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fechar menu ao clicar em um link (para mobile)
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menu.style.display = 'none';
        }
    });
});

// Efeito suave ao rolar para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Monta a mensagem para o WhatsApp com as variáveis
    // É importante codificar a URI para evitar problemas com caracteres especiais
    const mensagemWhatsApp = `Olá, meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Gostaria de falar sobre: ${mensagem}`;
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

    // Número de telefone para o WhatsApp (exemplo)
    const numeroWhatsApp = '5571988343422'; // Seu número de WhatsApp

    // Cria o link completo do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Abre o link do WhatsApp em uma nova aba
    window.open(linkWhatsApp, '_blank');

    // Opcional: Limpar o formulário após o envio
    myForm.reset();

});

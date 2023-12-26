// Adicionando a rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Troca de imagens de fundo a cada 10 segundos
const images = ['img/bg.jpg', 'img/equipe.jpg']; // Adicione mais imagens conforme necessário
let currentImageIndex = 0;

function changeBackground() {
    const imagemInicio = document.getElementById('inicioImage');
    imagemInicio.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Trocar a cada 5 segundos

// Efeito de zoom contínuo na imagem de fundo
function applyZoomEffect() {
    const imagemInicio = document.getElementById('inicioImage');
    imagemInicio.style.transition = 'transform 1.5s '; // Adiciona uma transição suave
    imagemInicio.style.transform = 'scale(2)'; // Ajuste o valor conforme necessário

    setTimeout(() => {
        imagemInicio.style.transform = 'scale(1)';
    }, 2000); // Ajuste a duração do zoom conforme necessário
}

setInterval(applyZoomEffect, 5000);
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        const opHeaders = document.querySelectorAll('.op_header');

        if (scrollPosition > 0) {
            header.style.backgroundColor = '#001F3E';
            header.style.borderBottom = '0.5px solid #001F3E';

            // Adiciona a classe 'scrolled' aos elementos op_header
            opHeaders.forEach(opHeader => {
                opHeader.classList.add('scrolled');
            });
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.borderBottom = 'none';

            // Remove a classe 'scrolled' dos elementos op_header
            opHeaders.forEach(opHeader => {
                opHeader.classList.remove('scrolled');
            });
        }
    });
});

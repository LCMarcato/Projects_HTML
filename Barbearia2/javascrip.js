// Selecionando os itens do carrossel e os botões
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Índice da imagem atual

// Função para atualizar a exibição das imagens
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active'); // Ativa o slide atual
        } else {
            item.classList.remove('active'); // Remove a ativação dos outros
        }
    });
}

// Função para mostrar a próxima imagem
function showNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length; // Incrementa e volta ao 0 no fim
    updateCarousel();
}

// Função para mostrar a imagem anterior
function showPrev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Decrementa e volta ao último
    updateCarousel();
}

// Inicia o carrossel exibindo a primeira imagem
updateCarousel();

// Eventos dos botões
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

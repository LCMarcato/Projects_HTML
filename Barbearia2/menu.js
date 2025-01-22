// Função para alternar o menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const menuLinks = document.querySelectorAll('#navbar ul li a');

// Fecha o menu quando um link é clicado
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove("active"); // Fecha o menu
        }
    });
});

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

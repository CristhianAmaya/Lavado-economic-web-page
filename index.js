document.addEventListener('DOMContentLoaded', function () {

    // =========================================================
    // 🔥 MENÚ HAMBURGUESA PARA DISPOSITIVOS MÓVILES
    // =========================================================
    function createMenuToggle() {

        // -----------------------------------------------------
        // 🎯 Elementos principales del menú
        // -----------------------------------------------------
        const menuToggle = document.querySelector('.menu-toggle');          // Botón hamburguesa
        const menuOverlay = document.querySelector('.menu-overlay');        // Fondo oscuro
        const menuContainer = document.querySelector('.menu-navegación');   // Contenedor del menú

        // Si alguno de los elementos no existe, no ejecutamos nada
        if (!menuToggle || !menuOverlay || !menuContainer) return;

        // -----------------------------------------------------
        // 🔄 Función que abre / cierra el menú
        // -----------------------------------------------------
        function toggleMenu() {
            menuToggle.classList.toggle('active');     // Anima el botón hamburguesa
            menuContainer.classList.toggle('active');  // Muestra / oculta el menú
            menuOverlay.classList.toggle('active');    // Muestra / oculta el overlay
        }

        // -----------------------------------------------------
        // 🖱 Eventos principales
        // -----------------------------------------------------

        // Abrir / cerrar menú al hacer click en el botón
        menuToggle.addEventListener('click', toggleMenu);

        // Cerrar menú al hacer click en el overlay
        menuOverlay.addEventListener('click', toggleMenu);

        // -----------------------------------------------------
        // 📱 UX móvil: cerrar menú al hacer click en un enlace
        // -----------------------------------------------------
        const menuLinks = document.querySelectorAll('.opcion a');

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });

        // -----------------------------------------------------
        // 🖥 Ajuste automático al cambiar tamaño de pantalla
        // -----------------------------------------------------
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                menuToggle.classList.remove('active');
                menuContainer.classList.remove('active');
                menuOverlay.classList.remove('active');
            }
        });
    }

    // =========================================================
    // 🔥 FUNCIÓN PARA CUANDO SE OPRIMA UN DATO DEL MENÚ,
    //    HAGA SCROLL HACIA LA SECCIÓN CORRESPONDIENTE
    // =========================================================
    function scrollToSection() {
        const menuLinks = document.querySelectorAll('.opcion a'); // Obtenemos todos los enlaces del menú
        const sections = document.querySelectorAll('section'); // Obtenemos todas las secciones de la página

        // Añadimos un evento de click a cada enlace del menú
        menuLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
                // Obtenemos el alt del enlace clickeado
                const alt_link = link.getAttribute('alt').toLowerCase();

                // Itero sobre las secciones para encontrar la que coincida con el alt
                sections.forEach((section) => {
                    if (section.getAttribute('alt').toLowerCase() === alt_link) {
                        Scrolling(section);
                    }
                });
            });
        });
    }

    // =========================================================
    // 🔥 SCROLL SUAVE HACIA UNA SECCIÓN ESPECÍFICA
    // =========================================================
    function Scrolling(element) {
        setTimeout(() => {
            element.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'end'      // Alinea la sección al final del contenedor visible
            });
        }, 100); // Pequeño delay para asegurar que el DOM esté listo
    }

    // =========================================================
    // 🚀 INICIALIZACIÓN DE FUNCIONES PRINCIPALES
    // =========================================================
    createMenuToggle();
    scrollToSection();
});

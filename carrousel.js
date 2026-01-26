document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // ⏪ CARRUSEL DE SERVICIOS
    // =========================================================
    function setupCarousel() {
        const cards = document.querySelectorAll('.service-card');
        const leftButton = document.querySelector('.button_arrow.left');
        const rightButton = document.querySelector('.button_arrow.right');

        let index = 0;

        function updatecarousel() {
            cards.forEach(card => card.classList.remove('active', 'left', 'right'));
            const total = cards.length;

            let leftIndex = (index - 1 + total) % total;
            let rightIndex = (index + 1) % total;
            cards[index].classList.add('active');
            cards[leftIndex].classList.add('left');
            cards[rightIndex].classList.add('right');
        }

        leftButton.onclick = () => {
            index = (index - 1 + cards.length) % cards.length;
            updatecarousel();
        }

        rightButton.onclick = () => {
            index = (index + 1) % cards.length;
            updatecarousel();
        }

        updatecarousel();
    }

    setupCarousel();
});
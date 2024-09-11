const cardList = document.querySelector('.card-list');
let isDragging = false;
let startX;
let scrollLeft;

cardList.addEventListener('mousedown', (e) => {
    isDragging = true;
    cardList.classList.add('active'); // Añade una clase opcional para cambiar el cursor
    startX = e.pageX - cardList.offsetLeft;
    scrollLeft = cardList.scrollLeft;
});

cardList.addEventListener('mouseleave', () => {
    isDragging = false;
    cardList.classList.remove('active');
});

cardList.addEventListener('mouseup', () => {
    isDragging = false;
    cardList.classList.remove('active');
});

cardList.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Solo se desplaza si está arrastrando
    e.preventDefault();
    const x = e.pageX - cardList.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
    cardList.scrollLeft = scrollLeft - walk;
});

// Scroll infinito
cardList.addEventListener('scroll', () => {
    if (cardList.scrollLeft + cardList.clientWidth >= cardList.scrollWidth) {
        cardList.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
});

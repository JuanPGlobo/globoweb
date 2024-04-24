document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelector('.logos');
    let isMoving = true;

    function moveLogos() {
        if (isMoving) {
            // Mover el primer logo al final de la fila
            const firstLogo = logos.children[0];
            logos.appendChild(firstLogo);

            // Resetear la animación removiendo y agregando la clase
            logos.classList.remove('move');
            void logos.offsetWidth; // Trigger a reflow
            logos.classList.add('move');
        }
    }

    // Mover logos cada 3 segundos
    setInterval(moveLogos, 3000);

    // Pausar cuando el usuario pasa el cursor sobre el carrusel
    logos.addEventListener('mouseenter', () => isMoving = false);
    logos.addEventListener('mouseleave', () => isMoving = true);
});

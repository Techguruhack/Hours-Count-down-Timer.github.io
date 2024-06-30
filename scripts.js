document.addEventListener('DOMContentLoaded', function () {
    const countdownContaineraz = document.getElementById('countdownaz');
    const endTimeaz = new Date();
    endTimeaz.setHours(endTimeaz.getHours() + 1); 

    function updateCountdownaz() {
        const nowaz = new Date();
        const timeLeftaz = endTimeaz - nowaz;
        
        if (timeLeftaz <= 0) {
            clearInterval(countdownIntervalaz);
            countdownContaineraz.textContent = 'Time\'s up!';
            triggerConfettiaz();
        } else {
            const hoursaz = Math.floor(timeLeftaz / (1000 * 60 * 60));
            const minutesaz = Math.floor((timeLeftaz % (1000 * 60 * 60)) / (1000 * 60));
            const secondsaz = Math.floor((timeLeftaz % (1000 * 60)) / 1000);

            countdownContaineraz.textContent = `${hoursaz}h ${minutesaz}m ${secondsaz}s`;
        }
    }

    function triggerConfettiaz() {
        const durationaz = 5 * 1000;
        const endaz = Date.now() + durationaz;

        (function frameaz() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < endaz) {
                requestAnimationFrame(frameaz);
            }
        }());
    }

    const countdownIntervalaz = setInterval(updateCountdownaz, 1000);
    updateCountdownaz(); 
});

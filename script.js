function showSurprise() {
    document.getElementById("surpriseBox").style.display = "block";
    startConfetti();
}

// Simple confetti effect
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 2,
            speed: Math.random() * 3 + 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        requestAnimationFrame(update);
    }

    update();
}

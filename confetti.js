document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.confetti-container');
    const colors = ['#FF69B4', '#9370DB', '#BA55D3', '#DA70D6', '#D8BFD8'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        container.appendChild(confetti);
    }
});

// Add to CSS:
// @keyframes fall {
//    0% { transform: translateY(-100vh) rotate(0deg); }
//    100% { transform: translateY(100vh) rotate(360deg); }
// }

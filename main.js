const canvas = document.querySelector(".canvas");

// Zamiast canvas odnoście się do kontekstu 2d "c"
const c = canvas.getContext("2d");

// ustawia szerokość canvas na 100%
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let fps=0, tps=0
const gravity = 0.25;
const player = new Player();

const platform = new Platform(5,{x:128,y:512});

// Kod w tej funkcji wykonuje się co klatkę
function frameUpdate() {
    requestAnimationFrame(frameUpdate)
    fps += 1
    // Usuwa poprzednią klatkę i rysuje nową
    c.clearRect(0,0,canvas.width,canvas.height)
    c.imageSmoothingEnabled = false;
    c.webkitImageSmoothingEnabled = false;
    player.render()
    platform.render();
}
frameUpdate();

function tickUpdate() {
    if (tps >= 240) return
    tps += 1

    // Update
    player.updatePosition();
    movementVelocity();
}
tickUpdate();
setInterval(tickUpdate, 1)
//Counters
setInterval(()=>{
    console.log(tps,fps);
    tps=0
    fps=0
}, 1000)
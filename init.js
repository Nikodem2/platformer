const canvas = document.querySelector(".canvas");

// Zamiast canvas odnoście się do kontekstu 2d "c"
const c = canvas.getContext("2d");

// ustawia szerokość canvas na 100%
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

const gravity = 0.5;

class Player {

    // Ustawienia renderu gracza tutaj
    constructor() {
        this.position = {
            x: 20,
            y: 20
        }
        this.width = 100
        this.height = 100

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    // metody gracza:
    render() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    // Dodaje velocity do aktualnej pozycji (w funkcji update)
    updatePosition() {
        this.render();
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height){
            
            this.velocity.y += gravity;
            this.position.y += this.velocity.y;


        }else{
            this.velocity.y = 0;
        }
    }
}

const player = new Player();
player.render();

// Detekcja przycisków
addEventListener("keydown", ({keyCode}) => {
    switch (keyCode) {
        case 65:
            console.log("A");
            keys.left.pressed = true;
            break;
        case 83:
            console.log("S");
            break;
        case 68:
            console.log("D");
            keys.right.pressed = true;
            break;
        case 87:
            console.log("W");
            player.velocity.y -= 20;
            break;
    }
})

addEventListener("keyup", ({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false;
            break;
        case 68:
            keys.right.pressed = false;
            break;
    }
})

// Przechowywanie danych o wciśniętych klawiszach
const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
}

// Nadawanie velocity po detekcji przycisku
function movementVelocity() {
    if (keys.left.pressed) {
        player.velocity.x = -5;
    }else if (keys.right.pressed) {
        player.velocity.x = 5;
    }else{
        player.velocity.x = 0;
    }
}

// Kod w tej funkcji wykonuje się co klatkę
function update() {
    requestAnimationFrame(update)

    console.log("Update Check");

    // Usuwa poprzednią klatkę i rysuje nową
    c.clearRect(0,0,canvas.width,canvas.height)
    player.updatePosition();


    movementVelocity();
}
update();
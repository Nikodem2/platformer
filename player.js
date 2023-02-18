class Player {
    // Ustawienia renderu gracza tutaj
    constructor() {
        this.position = {
            x: 20,
            y: 20
        }
        this.size = {
            x: 128,
            y: 128
        }
        this.canJump = false
        this.velocity = {
            x: 0,
            y: 0
        }
        this.sprite = new Sprite("sprites/player_idle.png", {x:128,y:128}, this.size, 10)
    }

    // metody gracza:
    render() {
        this.sprite.updateAnimationFrame(this.position.x, this.position.y);
    }

    // Dodaje velocity do aktualnej pozycji (w funkcji update)
    updatePosition() {
        //this.render();
        this.position.x += this.velocity.x

        if (this.position.y + this.size.y + this.velocity.y <= canvas.height){
            
            this.velocity.y += gravity;
            this.position.y += this.velocity.y;

            this.canJump = false
        }else{
            this.velocity.y = 0;
            this.canJump = true
        }
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
    if (keys.up.pressed) {
        if (player.canJump) { player.velocity.y -= 15; }
    }
}
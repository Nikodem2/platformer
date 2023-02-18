class Platform {
    constructor (length, pos) {
        this.length = length
        this.pos = pos

        this.sprites = []
        for (var i=0; i<length; i++) {
            this.sprites.push(new Sprite("sprites/grass.png", {x:16,y:16}, {x:64,y:64}, 0, false))
        }
    }
    render() {
        this.sprites.forEach((sprite, i)=>{
            sprite.updateAnimationFrame(this.pos.x +(i*64), this.pos.y)
        })
    }
}
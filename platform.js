class Platform {
    constructor (size, pos) {
        this.size = size
        this.pos = pos

        this.hitbox = new Hitbox({x:64*size.x,y:64*size.y},this.pos)
        this.sprites = []
        for (var i=0; i<size.x; i++) {
            this.sprites.push(new Sprite("sprites/grass.png", {x:16,y:16}, {x:64,y:64}, 0, false))
        }
        for (var y=1; y<size.y; y++) {
            for (var x=0; x<size.x; x++) {
                this.sprites.push(new Sprite(`sprites/dirt${(y%2)+1}.png`, {x:16,y:16}, {x:64,y:64}, 0, false))
            }
        }
    }
    render() {
        this.sprites.forEach((sprite, i)=>{
            sprite.updateAnimationFrame(this.pos.x +((i%this.size.x)*64), this.pos.y+Math.floor(i/this.size.x)*64)
        })
    }
}
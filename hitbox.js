class Hitbox {
    constructor(size, pos) {
        this.size = size
        this.pos = pos | {x:0,y:0}
    }

    collides() {
        map.forEach((mapObj)=>{
            if (mapObj.hitbox) {
                for (var y = 0; y < this.size.y; y=y+4) {
                    for (var x = 0; x < this.size.x; x=x+4) {
                        const check = {x: this.pos.x + x, y:this.pos.y + y}
                        const h = mapObj.hitbox //redefine for easier typing
                        if ( 
                            (check.x > h.pos.x && check.x < (h.pos.x + h.size.x)) && 
                            (check.y > h.pos.y && check.y < (h.pos.y + h.size.y)) 
                        ) return true //still not working
                    } 
                } 
            }
        })
        return false
    }
    updatePosition(pos) {this.pos = pos}
}
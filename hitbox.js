class Hitbox {
    constructor(size, pos) {
        this.size = size
        this.pos = pos | {x:0,y:0}
    }

    collides() {
        map.forEach((mapObj)=>{
            if (mapObj.hitbox) {
                for (var y = 0; y < this.size.y; y++) {
                    for (var x = 0; x < this.size.x; x++) {
                        const check = {x: this.pos.x + x, y:this.pos.y + y}
                        const hit = mapObj.hitbox //redefine for easier typing
                        if ( 
                            (check.x > hit.pos.x && check.x < (hit.pos.x + hit.size.x)) && 
                            (check.y > hit.pos.y && check.y < (hit.pos.y + hit.size.y)) 
                        ) return true
                    } 
                } 
            }
        })
        return false
    }
    updatePosition(pos) {this.pos = pos}
}
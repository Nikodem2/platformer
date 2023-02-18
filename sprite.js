class Sprite {
    constructor(url, frameSize, size, speed, animated) {
        this.img = new Image();
        this.img.src = url

        this.frameSize = frameSize
        this.size = size
        
        this.animated = animated || false

        this.speed = speed || 10
        this.currentFrame = 0
        this.waitedFrames = 0
    }
    updateAnimationFrame(x,y) {
        const size = this.frameSize
        if (!this.animated) return c.drawImage(this.img, 0, 0, size.x, size.y, x, y, this.size.x,this.size.y)
        //calculate offset
        let offset = {x: 0, y:0}
        offset.x = size.x * this.currentFrame
        if (offset.x >= this.img.width) {
            offset.y = Math.floor(offset.x / this.img.width) * this.frameSize.y
            offset.x = offset.x % this.img.width
        }
        //If non existing frame reset to frame 0
        if (offset.y >= this.img.height) {
            this.currentFrame = 0
            return this.updateAnimationFrame(x,y)
        }
        //Drawing
        c.drawImage(this.img, offset.x, offset.y, size.x, size.y, x, y, this.size.x,this.size.y)
        //Animtion
        this.waitedFrames +=1
        if (this.waitedFrames >= this.speed) {
            this.waitedFrames = 0
            this.currentFrame += 1
        }
    }

}

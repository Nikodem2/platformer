let level = 0;

maps = {
    0: [

    ],
    1: [
        new Platform(5,{x:500,y:1000})
    ],
    2: [
        new Platform(4,{x:400,y:900})
    ]
}

function levelCheck() {
    requestAnimationFrame(levelCheck);

    if(player.position.x >= canvas.width) {
        level += 1;
        player.position.x = 0;
    }
    map = maps[level];
}
levelCheck();
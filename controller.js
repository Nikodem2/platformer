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
            keys.up.pressed = true
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
        case 87:
            keys.up.pressed = false
    }
})

// Przechowywanie danych o wciśniętych klawiszach
const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    },
    up: {
        pressed: false
    }
}
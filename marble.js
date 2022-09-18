let ledPos = {x:0,y:0}
led.plot(ledPos.x, ledPos.y)

loops.everyInterval(500, function() {
    let roll = input.rotation(Rotation.Roll)
    let pitch = input.rotation(Rotation.Pitch);
    let oldPos = ledPos;
    if (roll > 0) {
        ledPos = calcPos(ledPos, 'right');
    } else if (roll < 0) {
        ledPos = calcPos(ledPos, 'left');
    }
    if (pitch > 0) {
        ledPos = calcPos(ledPos, 'up');
    } else if (pitch < 0) {
        ledPos = calcPos(ledPos, 'down');
    }
    if (oldPos !== ledPos) {
        led.unplot(oldPos.x, oldPos.y)
        led.plot(ledPos.x, ledPos.y)
    }
})

function calcPos(pos:any, dir:string) {
    if (dir == 'right') {
        if (pos.x < 4) {
            return {x: pos.x + 1, y: pos.y}
        } else {
            return pos;
        }
    }
    if (dir == 'left') {
        if (pos.x > 0) {
            return { x: pos.x - 1, y: pos.y }
        } else {
            return pos;
        }
    }
    if (dir == 'up') {
        if (pos.y < 4) {
            return { x: pos.x, y: pos.y + 1 }
        } else {
            return pos;
        }
    }
    if (dir == 'down') {
        if (pos.y > 0) {
            return { x: pos.x, y: pos.y - 1}
        } else {
            return pos;
        }
    }
}

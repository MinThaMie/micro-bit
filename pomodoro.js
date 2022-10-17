
let running = false
let pauze = 0
let timer = 0
let INITIAL_BREAK = 25
let INITIAL_TIMER = 5
const timerLeds = allLeds()
const pauzeLeds = allLeds().slice(0, INITIAL_BREAK);

input.onButtonPressed(Button.A, function () {
    timer = INITIAL_TIMER
    pauze = INITIAL_BREAK
    running = true
    turnOnScreen()
    while (running) {
        while (timer != 0) {
            pause(60000); // Wait a minute
            timer = timer - 1
            led.unplot(timerLeds[timer][0], timerLeds[timer][1])
        }
        pauze = INITIAL_BREAK       
        pause(1000); // To combat a race condition
        turnOnPauze()
        while (pauze != 0) {
            pause(60000); // Wait a minute
            pauze = pauze - 1
            led.unplot(pauzeLeds[pauze][0], pauzeLeds[pauze][1])
        }
        timer = INITIAL_TIMER
        pause(1000); // To combat a race condition
        turnOnScreen()
    }
})

input.onButtonPressed(Button.B, function () {
    running = !(running)
})

function allLeds () {
    let leds: number[][] = []
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            leds.push([x, y])
        }
    }
    return leds
}

function turnOnScreen () {
    for (let x2 = 0; x2 <= 4; x2++) {
        for (let y2 = 0; y2 <= 4; y2++) {
            led.plot(x2, y2)
        }
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
}
function turnOnPauze() {
    for (let x3 = 0; x3 <= 4; x3++) {
        for (let y3 = 0; y3 <= 0; y3++) {
            led.plot(x3, y3)
        }
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
}

let numb = 0
input.onGesture(Gesture.Shake, function () {
    // numb = randint(1,20)
    numb = 20
    basic.showNumber(numb)
    if (numb == 20) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    }
})

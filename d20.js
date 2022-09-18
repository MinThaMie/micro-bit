input.onGesture(Gesture.Shake, function () {
    const numb = randint(1,20)
    basic.showNumber(numb)
    if (numb == 20) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    }
})

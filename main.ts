let lista = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    lista = randint(0, 2)
    if (lista == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (lista == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})

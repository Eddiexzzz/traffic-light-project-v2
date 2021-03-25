input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    A = 1
    while (A == 1) {
        if (Pedestrian == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # . # . #
                . # . # .
                `)
            basic.pause(10000)
            for (let Countdown = 0; Countdown <= 10; Countdown++) {
                basic.showNumber(10 - Countdown)
            }
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            Pedestrian = 0
            basic.pause(5000)
        } else if (Pedestrian == 0) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(20000)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(20000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Pedestrian = 1
})
input.onGesture(Gesture.Shake, function () {
	
})
let B = 0
let Pedestrian = 0
let A = 0
A = 0
Pedestrian = 0
while (A == 0 && B == 0) {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
}

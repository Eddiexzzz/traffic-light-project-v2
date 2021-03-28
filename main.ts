// Once A is pressed the program begins.
input.onButtonPressed(Button.A, function () {
    A = 1
    // Restarts the program if uninterrupted.
    while (A == 1) {
        for (let index = 0; index < 20; index++) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(1000)
        }
        // If there are pedestrians waiting the program accounts for them and lets them cross on green.
        // If no pedestrians the program continues as normal.
        if (Pedestrian == 1) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # . # . #
                . # . # .
                `)
            basic.pause(10000)
            // Runs the 9 second pedestrian countdown before the light turns to yellow.
            for (let Countdown = 0; Countdown <= 9; Countdown++) {
                basic.showNumber(9 - Countdown)
                basic.pause(900)
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
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(20000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    }
    if (AB == 1) {
        while (AB == 1) {
            if (Mode == 1) {
                while (Mode == 1) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                    pins.digitalWritePin(DigitalPin.P2, 0)
                    pins.digitalWritePin(DigitalPin.P1, 1)
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                    pins.digitalWritePin(DigitalPin.P2, 0)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    basic.pause(500)
                }
            } else if (Mode == 2) {
                while (Mode == 2) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    pins.digitalWritePin(DigitalPin.P2, 1)
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    pins.digitalWritePin(DigitalPin.P2, 0)
                    basic.pause(500)
                }
            } else if (Mode == 2) {
                AB = 0
            }
        }
    }
})
// Changes between flashing red and flashing yellow.
input.onButtonPressed(Button.AB, function () {
    AB = 1
    A = 0
    Pedestrian = 0
    if (Mode == 0) {
        Mode = 1
    } else if (Mode == 1) {
        Mode = 2
    } else if (Mode == 2) {
        Mode = 0
    }
})
// Notifies the program of a pedestrian.
input.onButtonPressed(Button.B, function () {
    Pedestrian = 1
})
// Sets the program.
let Pedestrian = 0
let A = 0
let Mode = 0
let AB = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
AB = 0
Mode = 0
A = 0
Pedestrian = 0
// Restarts the program if uninterrupted.
while (A == 0) {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
}

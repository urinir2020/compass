basic.forever(function () {
    if (input.compassHeading() >= 316 && input.compassHeading() <= 360) {
        basic.showString("N")
    } else if (input.compassHeading() >= 0 && input.compassHeading() <= 45) {
        basic.showString("N")
    } else if (input.compassHeading() >= 46 && input.compassHeading() <= 135) {
        basic.showString("E")
    } else if (input.compassHeading() >= 136 && input.compassHeading() <= 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
basic.forever(function () {
	
})

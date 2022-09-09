let Direction2 = 0
basic.forever(function () {
    Direction2 = input.compassHeading()
    if (Direction2 > input.compassHeading() + 10) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M1,
        -255
        )
    } else if (Direction2 < input.compassHeading() + 10) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        255
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M1,
        255
        )
    }
})

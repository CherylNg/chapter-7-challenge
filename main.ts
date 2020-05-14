let noise2 = 0
let start2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    start2 = input.runningTime()
    noise2 = 0
    while (input.runningTime() - start2 < 1000) {
        noise2 += edubitSoundBit.readSoundSensor()
        basic.pause(100)
    }
    noise2 = noise2 / 10
    if (noise2 > edubitPotentioBit.readPotValue() + 0.67 + 10) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else if (noise2 > edubitPotentioBit.readPotValue() + 0.33 + 10) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
    basic.pause(1000)
})

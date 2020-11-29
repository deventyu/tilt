let nyuszi = game.createSprite(2, 2)
let dont = 20
let time = 400
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > dont) {
        nyuszi.change(LedSpriteProperty.Y, 1)
        basic.pause(time)
    }
    if (input.rotation(Rotation.Pitch) < dont * -1) {
        nyuszi.change(LedSpriteProperty.Y, -1)
        basic.pause(time)
    }
    if (input.rotation(Rotation.Roll) < dont * -1) {
        nyuszi.change(LedSpriteProperty.X, -1)
        basic.pause(time)
    }
    if (input.rotation(Rotation.Roll) > dont) {
        nyuszi.change(LedSpriteProperty.X, 1)
        basic.pause(time)
    }
})

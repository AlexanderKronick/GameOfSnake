input.onButtonPressed(Button.A, function () {
    snake.turn(Direction.Right, -90)
})
input.onButtonPressed(Button.B, function () {
    snake.turn(Direction.Right, 90)
})
let snake: game.LedSprite = null
snake = game.createSprite(0, 2)
let fruit = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    while (true) {
        snake.move(1)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (snake.isTouching(fruit)) {
        fruit.set(LedSpriteProperty.X, randint(0, 4))
        fruit.set(LedSpriteProperty.Y, randint(0, 4))
    }
})

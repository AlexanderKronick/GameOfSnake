input.onButtonPressed(Button.A, function () {
    snake.turn(Direction.Right, -90)
})
input.onButtonPressed(Button.B, function () {
    snake.turn(Direction.Right, 90)
})
let snakeb: game.LedSprite = null
let score = 0
let snake: game.LedSprite = null
snake = game.createSprite(0, 2)
let fruit = game.createSprite(randint(0, 4), randint(0, 4))
let snakeX = 2
let snakeY = 0
while (true) {
    snake.move(1)
    snakeX = snake.get(LedSpriteProperty.X)
    snakeY = snake.get(LedSpriteProperty.Y)
    basic.pause(800)
    if (snake.isTouching(fruit)) {
        fruit.set(LedSpriteProperty.X, randint(0, 4))
        fruit.set(LedSpriteProperty.Y, randint(0, 4))
        score += 1
    }
    if (score >= 1) {
        snakeb = game.createSprite(snakeX, snakeY)
        snakeb.change(LedSpriteProperty.X, snakeX)
        snakeb.change(LedSpriteProperty.Y, snakeY)
    }
}

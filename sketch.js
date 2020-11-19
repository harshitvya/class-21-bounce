var move, move1, unmove;

function setup() {
    createCanvas(800, 400);
    move = createSprite(400, 50, 50, 50);
    move1 = createSprite(700, 200, 50, 50);
    unmove = createSprite(400, 200, 100, 100);
    move.velocityY = 1;
    move1.velocityX = -1;
    move.debug = true;
    unmove.debug = true;
}

function draw() {
    background(0);
    console.log(move.x - unmove.x);
    console.log(unmove.x - move.x);
    Bounce(unmove, move);
    Bounce(unmove, move1);
    drawSprites();
}
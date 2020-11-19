function Bounce(unmove, move) {
    if (unmove.y - move.y < (move.height / 2 + unmove.height / 2) && move.y - unmove.y < (move.height / 2 + unmove.height / 2)) {
        move.velocityY = -1 * move.velocityY;
    }
    if (unmove.x - move.x < (move.width / 2 + unmove.width / 2) && move.x - unmove.x < (move.width / 2 + unmove.width / 2)) {
        move.velocityX = -1 * move.velocityX;
    }
}
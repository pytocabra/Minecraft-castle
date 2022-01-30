player.onChat("castle", function () {
    for (let index = 0; index < 8; index++) {
        builder.move(FORWARD, 24)
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(MOSSY_STONE_BRICKS)

    builder.teleportToOrigin()
    builder.turn(RIGHT_TURN)
    builder.mark()
    for (let index = 0; index < 8; index++) {
        builder.move(FORWARD, 16)
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(CRACKED_STONE_BRICKS)

    builder.teleportToOrigin()
    builder.move(FORWARD, 16)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 8; index++) {
        builder.move(FORWARD, 24)
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(POLISHED_ANDESITE)

    builder.teleportToOrigin()
    builder.move(FORWARD, 24)
    builder.turn(RIGHT_TURN)
    builder.mark()
    for (let index = 0; index < 8; index++) {
        builder.move(FORWARD, 16)
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(STONE_BRICKS)

    builder.teleportToOrigin()
    builder.move(FORWARD, 1)
    builder.mark()
    for (let index = 0; index < 12; index++) {
        builder.move(FORWARD, 14)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 14)
        builder.turn(RIGHT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(RIGHT_TURN)
    }
    builder.tracePath(BRICKS)

    builder.teleportToOrigin()
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 10)
    builder.move(UP, 1)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 4)
        if (index == 3) {break}
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }   
    builder.tracePath(IRON_BARS)

    builder.teleportToOrigin()
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 7)
    builder.move(UP, 2)
    builder.mark()
    for (let index = 0; index < 3; index++) {
        builder.move(FORWARD, 2)
        if (index == 2) {break}
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }  
    builder.tracePath(GLASS)

    builder.teleportToOrigin()
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 24)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 7)
    builder.move(UP, 2)
    builder.mark()
    for (let index = 0; index < 3; index++) {
        builder.move(FORWARD, 2)
        if (index == 2) {break}
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(GLASS)

    builder.teleportToOrigin()
    builder.move(FORWARD, 16)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 6)
    builder.move(UP, 2)
    builder.mark()
    for (let index = 0; index < 3; index++) {
        builder.move(FORWARD, 2)
        if (index == 2) {break}
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(GLASS)

    builder.teleportToOrigin()
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 16)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 16)
    builder.move(UP, 2)
    builder.mark()
    for (let index = 0; index < 3; index++) {
        builder.move(FORWARD, 2)
        if (index == 2) {break}
        builder.move(UP, 1)
        builder.turn(LEFT_TURN)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(GLASS)
})

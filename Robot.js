class Robot {
    construction(direction, positionX, positionY, turn) {
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
        this.turn = turn;
    }
    calculateDirection(direction, turn) {
        console.log("direction,turn");

        console.log(direction, turn);
        switch (direction) {
            case "N":
                switch (turn) {
                    case "L": direction = "W";
                        break;
                    case "R": direction = "E"
                    default: direction = direction;
                }
                console.log(direction, turn);
                break;

            case "E":
                switch (turn) {
                    case "L": direction = "N";
                        break;
                    case "R": direction = "S"
                    default: direction = direction;
                }
                break;

            case "S":
                switch (turn) {
                    case "L": direction = "E";
                        break;
                    case "R": direction = "W"
                    default: direction = direction;
                }
                break;

            case "W":
                switch (turn) {
                    case "L": direction = "S";
                        break;
                    case "R": direction = "N"
                    default: direction = direction;
                }
                break;

            default: direction = direction;
        }
        console.log(direction, turn);
        return this.direction = direction;
    }
    calculatePosition(positionX, positionY, direction, move, alert) {
        console.log(alert);

        if (alert) {
            console.log("It's go out the border,please change direction!");
        }
        else {
            console.log(move, direction, positionX, positionY, this.positionX, this.positionY);
            if (move) {
                switch (direction) {
                    case "N": positionY = positionY + 1; break; console.log("positionY"); console.log(positionY);
                    case "S": positionY = positionY - 1; break;
                    case "E": positionX = positionX + 1; break;
                    case "W": positionX = positionX - 1; break;
                    default: positionX = positionX; positionY = positionY;
                }
            }
            else {
                positionX = positionX; positionY = positionY;
            }
        }
        console.log(move, direction, positionX, positionY);

        return { positionX, positionY }
    }
}

module.exports = Robot
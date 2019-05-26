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


class Command {
    constructor(turn, move) {
        this.turn = turn;
        this.move = move;
    }
}


class Grid {
    consturctor(borderAlert, positionX, positionY) {
        this.borderAlert = borderAlert;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    borderJudge(positionX, positionY) {
        // console.log("this.positionX, positionY");

        // console.log(this.positionX, this.positionY);
        if (positionX < 0 || positionY > 6) {
            this.borderAlert = true;
        }
        else {
            this.borderAlert = false;
        }
        // console.log("positionX, positionY, this.borderAlert");

        //console.log(positionX, positionY, this.borderAlert);
        return this.borderAlert;
    }
}

class App {
    run() {

        console.log("this");
        const command = new Command("R", true);
        const robot = new Robot("N", 0, 0, command.turn);

        const nowPosition = robot.calculatePosition(0, 0, "N", command.move, false);
        const nowDirection = robot.calculateDirection("N", command.turn);

        console.log(nowPosition, nowDirection);

        const grid = new Grid(false, nowPosition.positionX, 7);
        //console.log("grid.alert, nowPosition.positionX")
        //console.log(grid.borderJudge(), nowPosition.positionX);
        const gridAlert = grid.borderJudge();

    }
}
new App().run();

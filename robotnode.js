const Robot = require('./Robot.js');
const Grid = require('./Grid.js');
const Command = require('./Command.js');

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

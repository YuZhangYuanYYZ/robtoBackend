const Robot = require('./Robot.js');
const Grid = require('./Grid.js');

class App {
    run() {
        const grid = new Grid(6, 6);
        const robot = new Robot( 0, 0, "N",grid);
        robot.runCommand('move');
        robot.runCommand('move');
        robot.runCommand('left');
        robot.printPosition();
    }
}
new App().run();

const MoveCommand = require('./MoveCommand');
const LeftCommand = require('./LeftCommand');
const RightCommand = require('./RightCommand');
const Command = require('./Command');

class Robot {
    constructor( positionX, positionY, direction, grid) {
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
        this.grid = grid;
    }
    
    runCommand(commandStr) {
        let command;
        switch (commandStr) {
            case "move":
                command = new MoveCommand(this.positionX, this.positionY, this.direction, this.grid);
                break;
             case "left":
                command = new LeftCommand(this.positionX, this.positionY, this.direction);
                break;
             case "right":
                command = new RightCommand(this.positionX, this.positionY, this.direction);
                break;   
             default:  
                command = new Command(this.positionX, this.positionY, this.direction);
        }
        const { direction, positionX, positionY } = command.execute();
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    printPosition(){
        console.log(this.positionX, this.positionY,  this.direction);
    }
}

module.exports = Robot
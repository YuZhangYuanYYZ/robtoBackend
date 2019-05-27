const Command = require('./Command.js');

class RightCommand extends Command{
    execute(){
        switch (this.direction) {
            case "N":
                this.direction = 'E';
                break;
            case "S":
                this.direction = 'W';
                break;
            case "E":
                this.direction = 'S';
                break;
            case "W":
                this.direction = 'N';
                break;
        }

        return { 
            positionX: this.positionX, 
            positionY: this.positionY,
            direction: this.direction 
        }
    }
}

module.exports = RightCommand;
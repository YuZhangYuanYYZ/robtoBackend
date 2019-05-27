const Command = require('./Command.js');

class LeftCommand extends Command{
    execute(){
        switch (this.direction) {
            case "N":
                this.direction = 'W';
                break;
            case "S":
                this.direction = 'E';
                break;
            case "E":
                this.direction = 'N';
                break;
            case "W":
                this.direction = 'S';
                break;
        }
        return { 
            positionX: this.positionX, 
            positionY: this.positionY,
            direction: this.direction 
        }
    }
}

module.exports = LeftCommand;
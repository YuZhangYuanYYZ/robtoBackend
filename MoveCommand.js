const Command = require('./Command.js');

class MoveCommand extends Command{
    constructor(...props){
        super(...props)
    }
    
    execute(){
        switch (this.direction) {
            case "N":
                this.positionY ++;
                break;
            case "S":
                this.positionY --;
                break;
            case "E":
                this.positionX ++;
                break;
            case "W":
                this.positionX --;
                break;
        }

        return { 
            positionX: this.positionX, 
            positionY: this.positionY,
            direction: this.direction 
        }
    }
}

module.exports = MoveCommand;
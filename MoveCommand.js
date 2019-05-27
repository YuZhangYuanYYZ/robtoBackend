const Command = require('./Command.js');

class MoveCommand extends Command{
    constructor(positionX, positionY, direction, grid){
        super(positionX, positionY, direction)
        this.grid = grid;
    }

    execute(){
        switch (this.direction) {
            case "N":
                if(!this.grid.isInBorder(this.positionX + 1,this.positionY)) {
                    console.log("out of border, can not move");
                    break;
                }
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
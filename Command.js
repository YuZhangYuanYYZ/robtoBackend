class Command {
    constructor(positionX, positionY, direction){
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    execute(){
        return { 
            positionX: this.positionX, 
            positionY: this.positionY,
            direction: this.direction 
        }
    }
}

module.exports = Command;
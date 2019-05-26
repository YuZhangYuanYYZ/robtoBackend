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

module.exports = Grid;
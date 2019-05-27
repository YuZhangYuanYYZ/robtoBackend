class Grid {
    consturctor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    isInBorder(positionX, positionY) {
        const isXInBorder = positionX >= 0 && positionX< 6;
        const isYInBorder = positionY >= 0 && positionY < 6;
        return isXInBorder && isYInBorder;
    }
}

module.exports = Grid;
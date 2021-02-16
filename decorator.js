const Decorator = function(){
    this.paintCansStock = [];
}

Decorator.prototype.addPaintCan = function(newPaintCan){
    this.paintCansStock.push(newPaintCan)
}

Decorator.prototype.getPaintCans = function(){
    return this.paintCansStock.length
}

Decorator.prototype.totalLitres = function(){
    total =0;
    for (can of this.paintCansStock){
        total += can.litres;
    }
    return total;
}

Decorator.prototype.enoughToPaintRoom = function(roomArea){
    return this.totalLitres() >= roomArea
}

Decorator.prototype.finishRoom = function(room){
    if (this.enoughToPaintRoom(room.area)) {
        room.finishedPainting()
    } 
}

Decorator.prototype.removePaintCan = function(index){
    this.paintCansStock.splice(index, 1)
}

Decorator.prototype.paintRoom = function(room){
    let area = room.area;
    if (this.enoughToPaintRoom){
        this.finishRoom(room);
        for (var i = 0; i < this.paintCansStock.length; i++){
            let can = this.paintCansStock[i]
            if (area >= can.litres){
                area -= can;
                this.removePaintCan(i)
                continue
            } else if (can >= area) {
                can -= area;
                return
            }
        }
    }
    return "Not enough paint"
}



module.exports = Decorator

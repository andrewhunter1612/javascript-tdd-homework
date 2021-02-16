const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function(){
    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(40);
        paint2 = new Paint(50);
        room = new Room(40)
    })

    it('new can of paint added', function(){
        decorator.addPaintCan(paint)
        const actual = decorator.getPaintCans()
        assert.strictEqual(actual, 1)
    })

    it('get total paint stock', function(){
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint2)
        const actual = decorator.totalLitres();
        // assert.strictEqual(actual, 70)
    })

    it('enough to paint a room', function(){
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint2)
        const actual = decorator.enoughToPaintRoom(room.area);
        assert.strictEqual(actual, true)
    })

    it('paint room', function(){
        console.log("in function");
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint2)
        decorator.paintRoom(room)
        console.log(decorator.paintCanStock);
        const actual = room.painted;
        const paintCans = decorator.getPaintCans();
        assert.strictEqual(actual, true)
        assert.strictEqual(paintCans, 1)
        
    })



})




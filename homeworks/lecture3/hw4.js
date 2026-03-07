function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function(){
    return this.a+this.b+this.c;
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function(){
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class
class Circle extends Shape{
    radius;
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return this.radius*this.radius*Math.PI;
    }
    circumference(){
        return this.radius*2*Math.PI;
    }
}

// 6. change all code above to use ES6 class syntax

class Shape{
    type;
    constructor(){
        this.type='shape';
    }
    getType(){
        return this.type;
    }
}

class Triangle extends Shape{
    a;
    b;
    c;
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a+this.b+this.c;
    }
    getArea(){
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
// no method overloading just overriding

function Shape(){

}
Shape.prototype.draw=function (){
    return "generic shape"
}

function Circle(){

}
Circle.prototype=new Shape()


//override
Circle.prototype.draw=function(){
    return "circle shape"
}

var c=new Circle()
console.log(c.draw())


function Square(){

}
Square.prototype=Object.create(Shape.prototype) //polymorphism


//override
Square.prototype.draw=function(){
    return "Square shape"
}

var s=new Square()
console.log(s.draw())




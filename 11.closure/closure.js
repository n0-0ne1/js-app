function greet(message){
return function(name){
    console.log(message+ " " + name)
}
}
var output=greet("hello")
console.log(output)
var finalOutput=output("hi")
console.log(finalOutput)
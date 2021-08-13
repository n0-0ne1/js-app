console.log("javascript")
console.log(this)
console.log(window)
var name= "jt" //global variable

function sample(){
    var name="jatin" // local variable
}

sample()
console.log(name)
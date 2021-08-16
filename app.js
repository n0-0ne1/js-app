console.log("javascript")
console.log(this)
console.log(window)
var name= "jt" //global variable

function sample(){
    var name="jatin" // local variable
}

sample()
console.log(name)

console.warn("!!")
console.info("123")
console.error("asd")

// == only checks the valye
// === also checks the type
console.log('1'==1) //true
console.log('1'===1) //false
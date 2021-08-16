console.log(this)
console.log(window)
console.log(window.length)
function sample(){
    console.log(this)
}
sample()
var b=function(){
    console.log(this)
}
b()

function test(){
    console.log(this)
    this.new1="hello"
}
test()
console.log(new1)


// this insdide an object function points to the object itself
var obj={
    name:"jt",
    log:function(){
        console.log(this)
    }
}
obj.log()

console.log("-------------------------")
var student ={
    name:"scott",
    log: function(){

        this.name="mahesh"
        console.log(this)
        var setName=function(newname){
            console.log("insede functions' function")
            this.name=newname
            console.log(this)
        }
        setName("jtgarrg")
        console.log(this)
    }
}
student.log()

//problem function inside function is polluting global varable


console.log("---------solution----------")
var stud ={
    name:"scott",
    log: function(){
        var self=this
        self.name="mahesh"
        console.log(self)
        var setName=function(newname){
            console.log("insede functions' function")
            self.name=newname
            console.log(self)
        }
        setName("jtgarrg")
        console.log(self)
    }
}
stud.log()

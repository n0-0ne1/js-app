//encapsulation


//private methods
var Module=(function(){
    var privateMethod=function(){
        return "private"
    }
    return {}
})()

console.log(Module.privateMethod)


//public methods
var Module=(function(){
    var publicMethod=function(){
        return "public"
    }
    return {myMethod:publicMethod}
})()

console.log(Module.myMethod())

var Module=(function(){
    return {myMethod:function(){return "public"}}
})()
console.log(Module.myMethod())

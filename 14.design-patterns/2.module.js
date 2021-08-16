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


//another way of writing

var Module=(function(){
    return {myMethod:function(){return "public"}}
})()
console.log(Module.myMethod())


//anonymous object literal return

var Module=(function(){
    var privateMethod=function(){
        return "private"
    }
    return { myMethod1:function(){return "public 1"},
             myMethod2:function(){return "public 2"}
}
})()

console.log(Module.myMethod2())

//locally scoped object literal

var Module=(function(){
    var myObj={}
    var privateMethod =function(){
        return "private"
    }

    myObj.publicMethod=function(){
        return "public"
    }
    return myObj
})()

console.log(Module.publicMethod())

//stacked locally scoped object literal

var Module=(function(){
    var privateMethod =function(){
        return "private"
    }

    var myObj={
        someMethod:function(){},
        anotherMethod:function(){}
    }
    return myObj
})()

console.log(Module.anotherMethod())
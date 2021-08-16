var Module =(function(){
    var privateMethod =function(){
        return "private"
    }
    var someMethod =function(){
        return "some"
    }
    var anotherMethod =function(){
        return "another"
    }
    var publicMethod =function(){
        return "public"
    }

    return{ 
        someMethod:someMethod,
        anotherMethod:anotherMethod,
        publicMethod:publicMethod
    }
})()
console.log(Module)

//Accessing private methods

var Module =(function(){
    var privateMethod =function(mess){
        return mess
    }
    var publicMethod =function(text){
        return privateMethod(text)
    }
    return{ 
        publicMethod:publicMethod
    }
})()

console.log(Module.publicMethod("fo"))



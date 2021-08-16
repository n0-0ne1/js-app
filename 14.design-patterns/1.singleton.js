function Student(){
    console.log("instance created")
}

//var stud1 =new Student()

//var stud2 =new Student()

// 

var Singleton=(function(){
    var instance =null
    var createInstance=function(){
        var obj =Object.create(null)
        console.log("obj created")
        return obj;

    }
    var getInstance=function(){
        if(!instance){
            instance=createInstance()
        }
        return instance
    }
    return {getmyInstance:getInstance}
})()
 
var singleton= Singleton.getmyInstance()

console.log(singleton)

var singleton2= Singleton.getmyInstance()

console.log(singleton2)


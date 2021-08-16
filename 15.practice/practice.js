function multiply(num){

    return function(num2){
        return function(num3){
            return num*num2*num3 
        }

    }
}

console.log(multiply(1)(2)(3))



var a=10
var b=a
a=20
console.log(a)
console.log(b)

var x=[1,2]
var y=x
x.push(3)
console.log(x)
console.log(y) //1,2,3 because x is a reference type


var out=(function(x){
    delete x 
    return x
})(0)

console.log(out) //output is 0

//delete is used to delete from object 

var out=(function(x){
    delete x.x 
    return x.x
})({x:0})

console.log(out) //output is 0


var m=1
var op=(function(){
    delete m
    return m
})()

console.log(op)

//making an array empty
var array=["a","b"]
//array.length=0
//array=[]
//array.splice(0,array.length)

// while(array.length){
//     array.pop()
// }
console.log(array)


//------------------------

function sum(array){
var result=0
for (i of array){
    if(typeof i =="number"){
    result+=i}
    else if(Array.isArray(i)){
        result+=sum(i)
    }
}
return result
}

console.log(sum([1,2,[3,4,[5]],3,8]))

/// table format

var data =[{name:"jt",last:"garg"}]

console.table(data)

//placeholders

console.log("Hello %s your Id is %i", "jt", 12345)
console.log("student data : %o is availabe", {name: "jt", city: "del"})
console.log("student data : %s is availabe", {name: "jt", city: "del"})

var firstName ='Scott'
var lastName = 'Desatnick'
var message= `FirstName is ${firstName} and lastname is ${lastName}`

console.log(message)












//function by default retuns undefined value
function get_name(){
    //console.log("hello")
    //return 
    return "jt"
}

var user_name = get_name()
console.log(user_name)

function getfullname(firstname,lastname){
    return firstname+ " " +lastname 
}

var fullname=getfullname()
console.log(fullname)

var fullname=getfullname("jt","garg")
console.log(fullname)

var fullname=getfullname("jt")
console.log(fullname)



console.log(1+"jt") //1jt
console.log(1+2+"jt")//3jt
console.log(1+2+"jt"+3+4)//3jt34

console.log(undefined+"jt"+3+4)//undefinedjt34
console.log(NaN+"jt"+3+4)//NaNjt34




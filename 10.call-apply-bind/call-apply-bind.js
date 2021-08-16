var person1={first:"jt",last:"garg"}
var person2={first:"krit",last:"verma"}
var person3={first:"bhalla",last:"bhalla"}

//console.log(this)

function getName(message,city){
 return message+ " to " +city+ " "+this.first+ " " +this.last
}


//when function needs to be invoked first
var bindgetname=getName.bind(person1)
console.log(bindgetname("welcome","hybad"))


//when function needs to be executed immediately
var fullnameusingCall =getName.call(person2,"welcome","del")
console.log(fullnameusingCall)

// oragnised call is apply
var fullnameusingApply =getName.apply(person3,["welcome","del"])
console.log(fullnameusingApply)

console.log(this)
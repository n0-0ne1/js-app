/**fat arror functions (=>)
 * shorter way of writing a regular function
 */

let add=function(x,y){
    return x+y
}
 
console.log(add(1,2))

//transformation

let mul=(x,y)=>{return x*y}

console.log(mul(1,2))

// one line

let sub =(x,y)=>x-y

console.log(sub(1,5))


//sorting

let num=[1,5,2]
//num.sort(function(a,b){return b-a})
console.log(num)

//transform

num.sort((a,b)=>b-a)
console.log(num)

//single parameter function

let len=["sd","dfg"].map(a=>a.length)

console.log(len)

//no parameter

let doc= ()=> console.log(window.document)

doc()

// object literal

// let color=function(color){
//     return {value:color}
// }

// let bg=color("blue")
// console.log(bg)

let color= c=> ({value:c})

let bg=color("blue")
console.log(bg)

// setTimeout(() => {
//     console.log("hello")
// }, 1000);

// setInterval(() => {
//     console.log("ha")
// }, 2000);


var emp={
    id:1,
    greet: function(){
        let self=this
        setTimeout(function() {console.log(self.id)}, 1000);
    }
}
emp.greet()


//fat arrow function doesn create its own this and refer to its parent this
var emp={
    id:1,
    greet: function(){
        setTimeout(() => {console.log(this.id)}, 1000);
    }
}
emp.greet()
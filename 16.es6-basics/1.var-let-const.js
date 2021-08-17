//var : function scoped

function sample(){
    var mess="hello"
    console.log(mess)
}
sample()
//console.log(mess) //error

// let and const : block scoped 
// let can be reassigned 
// const cnt be reassigned

if(true){
    var foo="foo"
    let bar ="bar"
    const shit="shit"
    console.log(foo)
    console.log(bar)
    console.log(shit)
    
}
// console.log(foo) 
// console.log(bar) //reference error
// console.log(shit) //reference error

console.log("test----------------")
function test(){
    if(true){
        var foo="foo"
        let bar ="bar"
        const shit="shit"
        console.log(foo)
        console.log(bar)
        console.log(shit)
        
    }
console.log(foo) 
//console.log(bar) //reference error
//console.log(shit) //reference error
}
test()


// for(var i=0;i<3;i++){
//     console.log(i)
// } 
// console.log(i)

// for(let i=0;i<3;i++){
//     console.log(i)
// } 
// console.log(i) //error

function sample1(){
    let f=1
    f=10
    //let f=101 cant reassign same variable
}
sample1()

const my=true
if(my){
    const user=["a","b"]
    //user=user.concat("c") //error
    console.log(user)
}




// name='jatin'
// function a(){
//      var name='jt'
// }
// a()
// console.log(name)

var x=10
function b(){
    var x=1
    a()
}

function a(){
    var a=2
    x=5
}
b()
console.log(x)
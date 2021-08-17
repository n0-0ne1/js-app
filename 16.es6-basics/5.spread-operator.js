// ...
const ad= [1,3,5]
const com=[2,4,6,...ad]
console.log(com);

//rest parameter ...
function display(a,b,...arguments){
    console.log(arguments);
}
display(1,2,3,4,5,6)

//constructing array literals

let initial=["A","B"]

let chars=[...initial,"C"]
console.log(chars);

//concatinatng two arrasy

let a1=[1,23]
let a2=[3,56]
let all=[...a1,...a2]
console.log(all);


//spread op and string

let ch=["A",..."BE","D"]

console.log(ch);


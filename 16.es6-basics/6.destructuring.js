//array destructuring

let arr=["jt","garg","bhalla"]
let [firstName,,,lastName]=arr
console.log(firstName);
console.log(lastName);

//object destructuring

let user={
    name:"jt",
    age:21
}

for(let [k,v] of Object.entries(user)){
    console.log(`${k}: ${v}`);
}

let {name,age}=user
console.log(name);
console.log(age);
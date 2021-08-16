function Student(name){
    this.name=name
    this.getName=function(){
        return this.name
    }
}

var stud = new Student("jt")
console.log(stud)
var studd = new Student("jt")
console.log(studd)

// getName is being copied everytime a new instance is created
// problem : memory usage; 
// solution: use prototype property


function Student1(name){
    this.name=name
}

Student1.prototype.getName=function(){
    return this.name
}

Student1.prototype.school="nvp"
var stud1 = new Student1("jt")
stud1.school="nvps"
console.log(stud1)

var stud2 = new Student1("jt")
console.log(stud2)
// now we have a refernce to the prototype

function Student(){
    this.name="jt"
    this.gender="M"
}
var stud =new Student()

console.log(Student.prototype)

console.log(stud.prototype)
console.log(stud.__proto__)

console.log(typeof Student.prototype)
console.log(typeof stud.__proto__)


console.log(stud.__proto__ === Student.prototype)



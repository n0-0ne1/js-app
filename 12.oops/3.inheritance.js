function Person(name){
    this.name=name
}

Person.prototype.getname=function(){
    return this.name
}

function Student(age){
    this.age=age
}


//inherit from pareent

Student.prototype=new Person("jt")

Student.prototype.getage=function(){
    return this.age
}

var stud=new Student(22)
console.log(stud)
console.log(stud.getname())
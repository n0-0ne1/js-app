var person={}

person.name="jt"
console.log(person)

//person={}

var person= {
    name:"jt",
    add: {
        state:"del"
    },
    getlast: function(){ //this function inside an object is called a method
        return this.name+" "+this.add.state;
    }
} 
console.log(person)
console.log(person.name)
console.log(person.add.state)
console.log(person.getlast())

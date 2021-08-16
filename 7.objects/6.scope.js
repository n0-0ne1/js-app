var person={first:"jt",last:"garg",city:"delhi"}
person.age=12
console.log(person)

person.first="jatin" //update
delete person.age //delete
console.log(person)


//prevent modifications

/*
    ?   Object.preventExtensions
*/

  //allow read delete and update but not add
Object.preventExtensions(person)

person.age=12
person.first="jt"
console.log(person)


/*
    ?   Object.seal
*/

  //allow read update but not add and delete
  Object.seal(person)

  person.age=12
  person.first="jatin"
  delete person.first
  console.log(person)

  /*
  ?   Object.freeze
  */
 
  //allow read but not add and delete and update
  Object.freeze(person)

  person.age=12
  person.first="jt"
  delete person.first
  console.log(person)


  var freezeObjectWithinObject={f:"jt",l:"garg",
  address:{city:"del"}
}
Object.freeze(freezeObjectWithinObject)
freezeObjectWithinObject.age=12
freezeObjectWithinObject.address.country="ind"
console.log(freezeObjectWithinObject)

//problem: inner object can be still modified
Object.freeze(freezeObjectWithinObject.address)
freezeObjectWithinObject.address.country="usa"
console.log(freezeObjectWithinObject)
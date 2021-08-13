//java script object notation
// inspired by bject literal notation
// double quotes for string keys/values

var obj={name: "jt", city:"del"}

console.log(obj.name)

var json_obj={"name": "jt", "city":"del"} 

console.log(json_obj.city)

var json_string=JSON.stringify(json_obj) 
console.log(json_string)

var json_parser=JSON.parse(json_string)
console.log(json_parser,typeof json_parser)
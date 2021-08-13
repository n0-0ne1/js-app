var data=[1,"jt",
function(name){return name},
null,
{name:"mahesh"},
[1,2,3]
]

console.log(data)

console.log(data[2](data[4].name))

console.log(data[2](data[4].name)+" likes "+data[5][0])
var items =["laptop","desktop","ipad","chair"]

for(var i=0;i<items.length;i++){
    console.log(items[i])
}

console.log("-------using for each----------------")

items.forEach(function(item){
    console.log(item)
})

console.log("-------using map----------------")

items.map(function(item){
    console.log(item)
})


console.log("------mao return array for each doesnt---------")
var d_forEach =items.forEach(function(item){return item})

var d_forMap =items.map(function(item,ind){return item+"-"+ind})

console.log(d_forEach)

console.log(d_forMap)


console.log("-------in/of----------------")
console.log("-------in reads index-----------")
console.log("-------of reads element-----------")


for(item in items){
    console.log(item)
}
for(item of items){
    console.log(item)
}








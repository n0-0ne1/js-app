// backticks (`)

let str= ` tmplate`
console.log(str)
console.log(str.length)
console.log(typeof str)

//using single quotes (')

let another_str=` tmplate's`
console.log(another_str)

//string cnatining (`)

let st1=` tmplate using   \` `
console.log(st1)

//multiline strings

let msg='sdfsdfwef\nasdfasdv'
console.log(msg)

let message=
                `
                this text
                can be
                `
console.log(message)    


// variable and expression substitution

let first="jt",last="garg"

let gret= `hi ${first} ${last}`
console.log(gret)
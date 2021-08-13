// immediately invoked functions

(function (){

    console.log("he")
})(); //no ; means error


(function (mesage){

    console.log(mesage)
})('welcome to iifs');

var get=(function (mesage){

    return mesage
})("hey") //outside invoked

console.log(get);


(function (mesage){

    console.log(mesage)
}("hey")); //inside invoked


(10==9);
(console.log('hi'))


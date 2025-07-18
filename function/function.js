// normal function
// function addition(num1,num2){
//     return num1+num2
// }
// function without function name 
// Anonymous function
let mul =function(num1,num2){
    return num1*num2
}
// Arrow function
let addition =(num1,num2)=>{
    return num1+num2;
}
// simply use this method also
let div=(num1,num2)=>(num1/num2)

console.log(addition(200,200))
console.log(mul(2,4))
console.log(div(10,2))

// simple task and this called closure example for closure method
function outerfunction(){
    let count=0;

    function innerfuntion(){
        count++;
        console.log(count)
    
    }
    return innerfuntion
}
let counter=outerfunction()

counter()
counter()
counter()
counter()
// console.log(outerfunction())

// example for closure this is without closure method
// function demo(){
//     let count=1
//     count++
//     console.log(count)
// }

// demo()
// demo()
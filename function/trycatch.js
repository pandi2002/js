// try {
//     let num1 = 100;
//     console.log(`Number: ${num1}`);

//     let num2 = 50;

//     if (num2 === 0) {
//         throw new Error("num2 cannot be zero");
//     }

//     let result = num1 / num2;
//     console.log(`Result: ${result}`);

// } catch (error) {
//     console.error(`An error occurred: ${error.message}`);
// }

try {
    let x='18';
    if(x==='') throw new Error("x is empty");
    if (isNaN(x)) throw new Error('x do have number data type');
    x=Number(x);
    if (x<5) throw new Error('its low');
    if (x>15) throw new Error('its high');
}
catch(error){
    console.log(error.message)
}
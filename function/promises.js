function myValue(data){
    console.log(`My value is: ${data}`);
}

let myPromises=new Promise((resolve,reject)=>{
    //producing code
    let x=0;
    if(x===0){
        resolve("Promise is solved")
    }else{
        reject("Promise is not solved")
    }
})
//Consuming code
myPromises.then((result)=>{myValue(result)}).catch((error)=>{myValue(error)})
//anothermethod of consuming code
myPromises.then((value)=>{myValue(value)},(error)=>{myValue(error)})
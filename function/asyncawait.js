
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Code is resolved');
        },2000);
    })
}
async function greeting() {
    let data=await getdata()
    console.log(data)
    
}
greeting()

async function fetchdata() {
    try{
        let result =await fetch('https://jsonplaceholder.typicode.com/todos')
        let data=await result.json();
        console.log(data);
    }catch(error){
        console.log(error.message);

    }
    
}
fetchdata()
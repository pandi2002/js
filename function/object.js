let person={
    id:121,
    name:"RAJA",
    designation:"TESTER",
    single:true,
    address:{
        city:"Trichy",
        state:"TAMILNADU",
        pin:621314,
    },
    details:function(){
        return `ID:${this.id} NAME:${this.name} DESIGNATION:${this.designation} STATUS:${this.single} CITY:${this.address.city} STATE:${this.address.state} PINCODE:${this.address.pin}`
    }

}

console.log(person.details())
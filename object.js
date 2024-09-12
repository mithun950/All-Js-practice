// simple object-------------------------------------

// let car={
//     name:"Bmw",
//     price:20000000000000,
//     color:" red"
//     isIndian: true;
// }
// car.price= 200;
// console.log(car.name)
// console.log(car.price)


// object er bhitor keyword er maan change---------------------

// let car={
//     name:"Bmw",
//     price:20000000000000,
//     color:" red"

// }
// car.price= 200;
// console.log(car.name)
// console.log(car.price)

// let person = {
//     name: "Isha",
//     age: "20",
//     salary:30000,
//     marid:false
// }
// person.age= "25"
// person.salary= 450000;
// person.marid= true;
// console.log(person.salary);
// console.log(person.age);
// console.log(person.marid)


// object er bhitor ki ki key ba properties and values ace ber kora---------------------------

// let person = {
//        name: "Isha",
//         age: "20",
//         salary:30000,
//         marid:false
//     }
//     const keys= Object.keys(person);
//     console.log(keys)
// values============================
// let person = {
//     name: "Isha",
//      age: "20",
//      salary:30000,
//      marid:false
//  }
//  const values= Object.values(person);
//  console.log(values)



// nasted object -------------------------------------------

let phone={
    name:"i phone",
    price:  26000,
    camera: "12px",
    veriant:{
        country: "usa",
        company: "apple",
    }
}
console.log(phone.veriant.company)
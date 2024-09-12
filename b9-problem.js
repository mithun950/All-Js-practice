// function calculateMoney(input){
//     const ticketPrice = 120;
//     const sequrityCost = 500;
//     const stuffCost = 8*50;
//     if(input<=0){
//         return "error,, please write positive number"
//     }

//     let totalCost = sequrityCost + stuffCost;
//     let totalIncome = ticketPrice*input-totalCost;
//     return totalIncome;
// }

//  const result = calculateMoney(10);
//  console.log(result)

// p2-------------------------------------

// function checkName(name){
//     if(typeof name !=="string"){
//         return "please Write a string";
//     }
//     let lastLetter = name.slice(-1).toLowerCase();
//     const letter = ['a', 'y', 'i' , 'e', 'o', 'o', 'w'];

//     let result = letter.includes(lastLetter);
//     return result?'Good Name':'Bad Name'
// }

// console.log(checkName("Salman"))
// console.log(checkName("RAFEE"))
// console.log(checkName("jhankar"))
// console.log(checkName(199))
// console.log(checkName(["Rashid"]))

// p-3-----------------------------------------

// function deleteInvalids(array){
//     if(! Array.isArray(array)){
//         return "error...Please Write an Array"
//     }
//     let newArray = [];
//     for(let element of array){
//         if(typeof element === "number" && isNaN(element)===false)
//             newArray.push(element)
//     }
//     return newArray;
// }

// const result = deleteInvalids([NaN, 1,12,0 ,-1 , undefined])
// console.log(result)

// function password(obj) {
//   if (
//     obj.name === undefined ||
//     obj.birthYear === undefined ||
//     obj.siteName === undefined ||
//     obj.birthYear.toString().length !==4
//   ) {
//     return "invalid";
//   }

//   let upperCase = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

//   const result = upperCase + "#" + obj.name + "@" + obj.birthYear;
//   return result;
// }
// const yourPass = password({
//   name: "kolimuddin",
//   birthYear: 1999,
//   siteName: "google",
// });
// console.log(yourPass);


function monthlySavings(array,livingCost){
    if(!Array.isArray(array) && typeof livingCost !== "number"){
        return "invalid input"
    }
    let totalIncome =0;
    for(let payment of array){
        if(payment>=3000){
          let  tax = payment* 20/100;
        }
        else{
        totalIncome+=payment
        }
        let savings=totalIncome-livingCost;
        return savings>=0? savings : "earn more"
    }

}
const result=monthlySavings ([ 1000 , 2000 , 2500 ] , 5000);
console.log(result)
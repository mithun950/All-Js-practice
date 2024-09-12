 
    
        
//        let milkOrders= [
//           {quantity: 10, pricePerLiter: 1.5},
//           {quantity: 5, pricePerLiter: 1.2}
//         ],
        
      
      

// function milkDelivery(milkOrders){
//     for(const item of milkOrders){
//         let price = item.quantity*item.pricePerLiter;
        
//     }
    
// }

// const result = milkDelivery(milkOrders)
// console.log(result)

// let milkOrders= [
//               {name:"Rajjak",quantity: 10, pricePerLiter:40},
//               {name:"mithun", quantity: 5, pricePerLiter: 2}
//             ]

// function milk(milkOrders){
    
    // for(const item of milkOrders){
    //   let price = item.quantity*item.pricePerLiter;
    //   if(price>=50){
    //      discount= price*5/100;
    //      discountPrice=price-discount;
    //       console.log(`${item.name}:${discountPrice}`);
    //      }
    //      else{
    //         return `${item.name}:${price}`;
    
    //      }
//     }
    
// }

 
// console.log(milk(milkOrders));


// let students = [
//     {name:'isha' , subject:"math",score:95},

//     {name:'mithun' , subject:"math",score:65},

//     {name:'sabbir' , subject:"math",score:78},

//     {name:'sinha' , subject:"math",score:40}
// ]
// function studentGrade(students){
//     let newArray=[];
//     for(const item of students){
//         if (item.score>=80 && item.score<=100){
//             newArray.push(grade = item.name+"'s grade is : C" )
//         }
//         else if(item.score>=60 && item.score<=79){
//             newArray.push(grade = item.name+"'s grade is : C" )
//         }
//         else if (item.score>=0 && item.score<=69){
//             newArray.push(grade = item.name+"'s grade is : C" )
//         }
           
//     }
//     return  newArray
   
// }

// let result = studentGrade(students);
// console.log(result)


// let targetSale = {
//        sales:[14000,150000,16000,30000,40000,50000,20000,60000,12000,56000,33000,45000],
//        target:100000
// };

// function  mrMamun(targetSale){
//    let  sum=0;
//      for(let item of targetSale.sales){
//         sum+=item
        
//      }
//      console.log("You sale this Year : ",sum)
//      if(sum>=targetSale.target){
//         return true;
//      }
//      else{
//         return false;
//      }
// }
// const result = mrMamun(targetSale)
// console.log(result)


// let inventory = {
//     items: [
//       {"itemName": "Laptop", "stock": 12},
//       {"itemName": "Smartphone", "stock": 3},
//       {"itemName": "Headphones", "stock": 7},
//       {"itemName": "Keyboard", "stock": 2},
//       {"itemName": "Mouse", "stock": 0}
//     ]
//   };
  
// function available (items){
//    let  newArray = [];
//    for (let arr of items){
//     if(arr.stock>5){
//         newArray.push(arr)
//     }
//    }
//    return newArray;
// }  

// let result = available(inventory.items)
// console.log(result)

// let custmar ={
//     "customerName": "আনিকা রহমান",
//     "totalPurchases": 250,
//     "points": 1200
//   }

//   function custmarPoint(custmar){
    
//     if(custmar.totalPurchases>200){
//          pointAdd = custmar.points+100;
//     }
//     return pointAdd;
//   }

//   const result = custmarPoint(custmar)
//   console.log(result)
  

function passwordCheak(password){
    if(password.length<8 ){
        return "Error! you should give 8 or more charcter";
    }

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber =false;

    for(let char of password){
        if(char>='A' && char<='Z'){
            hasUpperCase = true;
        }
        else if (char>= 'a' && char<= 'z'){
            hasLowerCase=true;
        }
        else if (char>= '0' && char<="9"){
            hasNumber = true;
        }

    }
    return hasLowerCase && hasUpperCase && hasNumber;
}


console.log(passwordCheak("54dHw000"))
console.log(passwordCheak("555He"))
console.log(passwordCheak("555Rony"))
console.log(passwordCheak("wweeeerrR"))
console.log(passwordCheak("555eeee"))
console.log(passwordCheak("555RR"))
console.log(passwordCheak("mmmmmmm"))
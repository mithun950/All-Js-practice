// const max = Math.max(2, 3, 5, 78, 9, 9, 0, 9888, 5, 443333, 3222, 4, 678, 9, 8);
// console.log(max);
// ----------------------------------------------------------------------
// function maxHeight(numbers){
//   let  max=numbers[0];
//  for(let num of numbers){
//     if(num>max){
//         max=num;
//     }
//  }
// return max;
// }
// const result = maxHeight([75,65,78,98,45,67,86,71])
// console.log(result/12," this is the max height")

// ------------------------------------------------------------------------

// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 29;

//   let totalChairWood = chairQuantity * perChairWood;
//   let totalTableWood = tableQuantity * perTableWood;
//   let totalBedWood = bedQuantity * perBedWood;

//   let totalWood = totalChairWood + totalTableWood + totalBedWood;

//   return totalWood;
// }
// const result = woodQuantity(0, 3, 5);
// console.log(result)

// -------------------------------------------------------------------------

// function jamaKaporQuantity(shirtQuantity, pantQuantity, showQuantity) {
//   let perShirtPrice = 1500;
//   let perPantPrice = 1000;
//   let perShowPrice = 1350;

//   let totalShirt = shirtQuantity * perShirtPrice;
//   let totalPant = pantQuantity * perPantPrice;
//   let totalShow = showQuantity * perShowPrice;

//   let total = totalShirt + totalPant + totalShow;

//   return total;
// }

// const products = jamaKaporQuantity(101,6,5)

//     console.log(products)

// --------------------------------------------------------

// let phones = [
//   { name: "samsung", price: 25000, camera: "12MP" },
//   { name: "Oneplus", price: 40000, camera: "12MP" },
//   { name: "Oppo", price: 20000, camera: "12MP" },
//   { name: "metorula", price: 15000, camera: "12MP" },
// ]
// function cheapestPhne(phones) {
//   let min = phones[0];
//   for (const item of phones) {
//     if (item.price < min.price) {
//       min = item;
//     }
//   }
//   return min;
// }
// const result = cheapestPhne(phones);
// console.log(result);

// -----------------------------------------------------------------

let phones = [
  { name: "samsung", price: 25000, camera: "12MP" },
  { name: "Oneplus", price: 40000, camera: "12MP" },
  { name: "Oppo", price: 20000, camera: "12MP" },
  { name: "metorula", price: 15000, camera: "12MP" },
];

// function damiPhone(phones){
//     let max = phones[0];
//     for(const items of phones){
//         if(items.price>max.price){
//             max=items;
//         }
//     }
//     return max;
// }

// console.log(damiPhone(phones));

// function discountTaka(quantity) {
//   if (typeof quantity !== "number") {
//     return "Invalid....You Can use only numbers";
//   }
//   if (quantity <= 100) {
//     let total = quantity * 100;
//     return total;
//   } else if (quantity <= 200) {
//     let total = quantity * 90;
//     return total;
//   } else {
//     let total = quantity * 70;
//     return total;
//   }
// }
// const result = discountTaka("33");
// console.log(result);

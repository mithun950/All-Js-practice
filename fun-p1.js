// function inchtoFeet(inch){
//    let feet= inch/12
//    return feet;

// }
// console.log(inchtoFeet(69));
// --------------------------------------------------------
// function miletoKilo(mile){
//   let  kilo = mile*1.603;

//   return kilo;
// }

// console.log(miletoKilo(5))

// ------------------------------------------

// function isLeapYear(year){
//     if(year%4===0){
//         console.log(year,"is leap year");

//     }
//     else {
//         console.log(year, "is not leap year");
//     }
//     return year;
// }
// let result= isLeapYear(2072);

// -----------------------------------------------------

// function oddAvg(numbers){
//   let  oddNum=[];
//     for(const num of numbers){
//     if(num%2===1){
//       oddNum.push(num) ;

//     }
// }
// let sum=0;
// for(const num of oddNum){
//     sum+=num

// }
// let count = oddNum.length;

//     avg = sum/count;
//     console.log(avg)

//     return avg;
// }

// let value=oddAvg([2,3,4,5,2,49,1,3])

// ---------------------------------------------------

// function evenNumber(numbers) {
//   evens = [];
//   for (const num of numbers) {
//     if (num % 2 === 0) {
//       evens.push(num);

//     }

//   }
//   let sum=0;
//   for(const num of evens){
//     sum+=num;
//   }
//   const count = evens.length;
//   const avg = sum/count;
//   console.log("even numbers avg is :",avg)
//   return avg;
// }
// const array = [2, 23, 4, 5, 6, 7, 8, 90, 2, 5, 8];
// const result = evenNumber(array)

// function noDuplicate(array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item)===false){
//             unique.push(item);
//         }
//     }
//      return unique;
// }
// const arrays = ["abul",'kabil','abul','labib','abul'];
// const value =noDuplicate(arrays);
// console.log(value)
// -------------------------------------------------------------

// function maxNum (numbers){
//  let result = Math.max(numbers);
//     console.log(result);
//     return result;
// }
// const value = (2,3,5,7,8,92,4,667,345,1000,346);

// const shorbuccho = maxNum(value);

// ------------------------------------------------

// const max = Math.max(2, 4, 5, 43, 22, 4, 5, 6, 7, 8, 8, 9);
// console.log(max);

// ---------------------------------------------------------------

// const min = Math.min(2,4,56,6,78,890,333,4,5,56,67,7,);
// console.log(min)

// --------------------------------------------------------------

// const pie = Math.PI;
// console.log(pie)

// ------------------------------------------------------------

// const absilute = Math.abs(-100)
// console.log(absilute)

// ------------------------------------------------------

// const round = Math.round(10.60000);
// console.log(round)

// --------------------------------------------------------

// const floor = Math.floor(2.855576778888);
// console.log(floor)

// --------------------------------------------------------
// const ceil = Math.ceil(3.11)
// console.log(ceil)

// --------------------------------------------------------
// const random=parseInt( Math.random()*(20-10)+10)
// console.log(random)

// -------------------------------------------------------------

// const today = new Date();
// console.log(today);

// ---------------------------------------------------------

const date = new Date('2039-10-09');
console.log(date);
console.log(date.getDay());

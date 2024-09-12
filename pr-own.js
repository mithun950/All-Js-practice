// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum = 0;
// for(const num of numbers){
//     sum+=num;
// }
// console.log(sum)
// // output=55

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(const num of numbers){
//     if(num%2===0){
//         console.log(num)
//     }
// }
// // output=2 4 6 8 10

// const numbers = [20, 45, 87, 12, 99, 64, 75];

// let max = numbers[0]
// for(const num of numbers){
//     if(num>max){
//         max=num
//     }

// }
// console.log(max)

// // output=99

// function addNumbers(a, b) {
//     sum=0;
//     sum=a+b
//     return sum;
//   }
//   console.log(addNumbers(5, 10));
// //  output = 15

// function square(num) {
//     sqr = num*num;
//     return sqr;
//   }
//   console.log(square(10));
// output = 100

// const str = "Hello, World!";

// let len = str.length;
// console.log(len)
// output = 13

// const str = "JavaScript is awesome!";

// let ase = str.includes("J");
// console.log(ase)

// const str = "HELLO WORLD";

// console.log(str.toLowerCase())

// const num =8

// if(num%2===0){
//     console.log("it is Even number")
// }
// else{
//     console.log("It is odd number")
// }
//   let sum=0;
// for (i=1;i<=100;i++){

//         sum+=i;

// }
// console.log(sum)

// function checkNumber(num) {
//     if(num>0){
//         return "positive"
//     }
//     else if (num<0){
//         return "negitive"
//     }
//     else{
//         return "zero"
//     }
//   }
//   const result = checkNumber(0);
//   console.log(result)

// const age =10
// if(age>18){
//     console.log('Adult')
// }
// else{
//     console.log("Not An Adult")
// }

// function countEvenNumbers(arr) {
//    let count=0
//     for(const item of arr){
//         if(item%2===0){

//           count++
//         }

//     }
//     return count
//   }
//   const numbers = [2, 5, 8, 11, 14, 17];
//   console.log(countEvenNumbers(numbers));

// function getStringLengths(arr) {
//     arrLength=[];
//     for(const item of arr){
//       arrLength.push(item.length)
//     }
//     return arrLength;
//   }
//   const strings = ["apple", "banana", "cherry"];
//   console.log(getStringLengths(strings));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArr=[]
// for(const item of numbers){
//    newArr.push(item*item);

// }
// console.log(newArr)

// const numbers = [10, 20, 30, 40, 50];
//  let sum=0;
// for(const item of numbers){
//     sum+=item;
//     avg=sum/numbers.length;
// }

// console.log(avg)

// const numbers = [25, 60, 100, 5, 80, 40];
// let max=numbers[0];
// let min=numbers[0];
// for (const item of numbers){
//     if(item>max){
//         max=item;
//     }

//     else if (item<min){
//         min=item;
//     }

// }
// console.log(max," holo maximum")
// console.log(min," holo minimum")
// let diffrence = max-min;
// console.log("parthokko ",diffrence)

// function isPrime(num){
//     for(const item of num){
//         if(num%item===1){
//             return true;
//     }
//     else{
//         return false ;
//     }

// }
//  const result=isPrime(1)

// function factorial(num){
//     if(num===0 || num===1){
//         return 1;
//     }else{
//         multiple=1;
//         for( i=2;i<=num;i++){
//            multiple*=i;
//         }
//     }

//     return multiple;
// }
// const result=factorial(3);
// console.log(result)

// function findUnique(arr) {
//        let unique=[];
//        for (const item of arr)
//         if(unique.includes(item)===false){
//             unique.push(item)
//         }
//       return  unique;
// }
// const numbers =findUnique([1, 2, 2, 3, 4, 4, 5,10,10,10,20,20,30]);
// console.log(numbers)

// const sentence = "javascript is a great language";
// console.log(sentence[0].toUpperCase+sentence.slice(1));

// function countVowel(sentence){
//     count=0;
//     vowel= ["a",'e','i','o','u','A','E','I','O','U'];
//     for(i=0;i<sentence.length;i++){

//          if(vowel.includes(sentence[i])){
//             count++
//          }
//     }
//     return count;
// }
// const result = countVowel("I love programming in JavaScript")
// ;
// console.log(result)

// function revString(str){
//     reve= str.split("").reverse().join("")
//     return reve;
// }
// console.log(revString("hello"));

// const numbers = [10, 15, 35, 49, 70,100];

// for(const num of numbers){
//     if(num%5===0 && num%7===0){
//         console.log(num)
//     }

// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7];
// count={};
//     duplicate=[]
// for(let i=0;i<numbers.length;i++ ){
//     num=numbers[i]
//     if(count[num]){
//        count[num]++;
//     }
//     else{
//         count[num]=1;
//     }

// }
// for(const num of count){
//     if(count[num]>=2){
//         duplicate.push(num)
//     }
//     console.log(duplicate)
// }

// function sqrSum(numbers){
//   sum=0
//     for(let item of numbers){
//         sum+=item*item;

//     }
//     return sum;
// }
// const result = sqrSum([10,10,10])
// console.log(result)

// let sqr=[10,5,10]
// sum=0;
// for(let num of sqr){
//     number=num*num;

//     sum+=number;

// }
// console.log(sum)

function caseString(arr) {
 return arr.sort((a, b) => a.length - b.length);
}
const strings = ["apple", "banana", "kiwi", "cherry", "mango"];
console.log(caseString(strings));


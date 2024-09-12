// let number = [1, 2, 2, 4, 6, 4];
// let num = ["asik", 'tammil', 'imran'];

// add= number.concat(num);
// console.log(add)

//  let num = ["asik", 'tammil', 'imran','fahim'];
//  console.log(num.indexOf("imram"));

// let number = [1, 2, 2, 4, 6, 4];

// console.log(number.indexOf(1));

// let num = ["asik", 'tammil', 'imran'];
// console.log(num.includes('asi'))

//  let num = ["asik", 'tammil', 'imran','abir','isha'];
//  console.log(num.reverse().join(""))

// let str = " ami khaw re shudi naaa amar sathe j bhab dhorbo tare ami baal diyao manbo naaa";

// console.log(str.split('e'));

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// console.log(num.slice(2,5))

// let num = ["asik", 'tammil', 'imran','abir','isha'];
//    naam=num.push("shaad","toufik")
// console.log(num)

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// naam=num.shift()
// console.log(num)

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// let nqq = num.unshift("jaan")
// console.log(num)

// let num = ["asik", 'tammil', 'imran','abir','isha'];

// for(let number of num){
//     console.log(number)
// }

// for(i=60;i>1;i--){
//     console.log(i);
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// for(i=0;i<num.length;i++){
//     console.log(num[i])
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// for(i=num.length-1;i>=0;i--){
//     console.log(num[i])
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// let i= 0;
// while(i<num.length){
//     console.log(num[i]);
//     i++;
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// let i= num.length-1;
// while(i>=0){
//     console.log(num[i]);
//     i--;
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// for(let item of num){
//       console.log(item)
// }

// let num = ["asik", 'tammil', 'imran','abir','isha'];
// for ( let item of num.reverse()){
//     console.log(item);
// }

// for(i=1;i<=2;i++){
//     console.log("isha");
//     for(j=1;j<5;i++){
//         console.log("mithun")
//     }
// }

// let number = [1, 1, 2, 3, 4, 12, 5, 6, 34];
// let sum = 0;
// for(let item of number){
    
//     sum=sum+item;
    
// }


// console.log(sum)

// let number = [1, 1, 2, 3, 4, 12, 5, 6, 34];
// let even= []
// for(let item of number){
//     if(item%2===0){
//         even.push(item);
//         console.log(item)
//     }
// }



const person = {
    name : "mithun",
    roll: 30,
    isStudent:  true,
    age : 23,

    result:{
        hsc:"A+",
        ssc:"A+"
    }
}
const keys = Object.keys(person)
const value = Object.values(person)

console.log(keys)
console.log(value)
person.name= "isha";
person.marid= true;
console.log(person);
console.log(person.result.hsc)
delete person.isStudent
console.log(person)







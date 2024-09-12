// function simplePrectice (num1,num2,num3){
//     console.log("amar naam mithun",num1)
//     console.log("ami function shikhtesi",num2)
//     console.log("ins sha Allah ami shob shikhbo",num3)
// }
// simplePrectice(7,12,5);

// function sumKorbo(num1, num2) {
//     // console.log(num1,num2);
//     const sum = num1+num2;
//     console.log(sum)
// }
//  sumKorbo(3,7);
//  sumKorbo(59,78);4

// function subKorbo(num1,num2) {
//  const result = num1 - num2;

//       console.log(result)

// }
// subKorbo(9,6)

// function shirtPrice (num1,num2){
//         // console.log(num1,num2);
//         sum=num1+num2;
//         console.log(sum);

//         return sum;

// }
// const totalPrice= shirtPrice(20,45);

// console.log("---------------------------")

// const vatInclude =  8/65;
// const total = totalPrice+vatInclude
// console.log("vat shoho tutal price",total);

// function suqure (num){
//     // console.log(num)
//    const sqr = num*num;

// console.log(sqr)
// }
// suqure(30)

// function vaag ( num1, num2){
//     // console.log(num1,num2)

//     const total= num1/num2;
//     console.log(total);

// }
// vaag(40,5)

// function multiPlication(number){

//     for (i=0;i<=10;i++){
//          multipleStrc = {`9 * ${i}`}=${9*[i]}
//          console.log(multipleStrc);
//     }

// }
// multiPlication(9)

// function sumSub (num1,num2,num3,num4){
//     sum= num1 + num2 + num3;
//     sub = sum - num4;
//     jug =sum+sub;

//     console.log('sum is :',sum);
//     console.log('sub is :',sub);
//     console.log('jug is :',jug);

//  return jug;
// }
// let allOparation = sumSub(500,300,34,600);
// let total= allOparation*2
// console.log('shob shesh e: ',total)

// function twintyTimes(number){
//     total = number*20;
//     console.log(total)
//     return total;
// }

// let value = twintyTimes(10);
// console.log("-------------------------")
// let vag = value/30;
// console.log(vag)

// function add (price1,price2){
//     return price1+price2;

// }
// const jug = add(1200,1400);
// console.log(jug)

// function isEven(number){
//    if(number%2===0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }
// const even = isEven(13)
// console.log(even)
// console.log("///////////////////////////////////")

// let jug = even;
// if(jug===true){
//     console.log("khela khotom")
// }
// else{
//     console.log("khela shuru ",jug+1);
// }

// function isOdd ( num1,num2){
//     numbers= num1,num2;
//     if(numbers%2===1){
//         return true
//     }
//     else{
//         return false ;
//     }
// }
// const value = isOdd(13,21);
// console.log(value)

// function allArray(numbers) {
//   sum = 0;
//   for (const item of numbers) {
//     sum = sum + item;
//   }
//   return sum;
// }
// const array = [2, 4, 6, 78, 23, 56];
// const value = allArray(array)
// console.log(value)

// function allPositive (numbers){
//   let  positive=[];
//     for (let item of numbers){
//         if (item>0){
//            console.log(item)
//         }
//     }
//     return positive ;
// }

// let array = [12,-2,4,-19,3,-5,5,];
// let value = allPositive(array);

// console.log("|||||||||||||||||||||||||||")

// sum=0;
// for ( const num of value){
//     sum = sum+ num;

// }
// console.log(sum)

// function evenSizeStr (str){
//     const  size =str.length;
//     console.log(str,size);
//     if(size%2===0){
//         console.log("even size")
//     }
//     else {
//         console.log("odd size")
//     }
// }
// evenSizeStr("amar shunar bangla ami tumae bhalo bashi kichu ba")
// evenSizeStr("mithun")

// function evenSizeArray(array) {
//   size = array.length;
//   console.log(array, "Array size is: ", size);

//   if(size%2===0){
//     console.log("even Array")
//   }
//   else{
//     console.log("odd array")
//   }
// }
// evenSizeArray([1, 3, 4, 5, 6, 7, 2, 4, 5, 2, 46, 34, 27,23,45,1]);
// evenSizeArray([3, 3, 4, 2, 4, 2, 4, 2, 4, 2, 5, 6, 7, 2, 5, 6, 72, 4, 67]);

// function evenSizeArray(array) {
    
//     let even=[];
// for (let item of array){
//     if(item%2===1){
//         even.push(item)
//         console.log(even)
//       }
      
// }
   
//   }
//   evenSizeArray(["#"]);
  
// function machTorkari(fish,shobji,moshla){
//     console.log("hit the oil")
//     console.log("give "+moshla+" on the max hit oil");
//     console.log("give the"+shobji);
//     console.log(fish + " give");

//     return "Ready a home made fish carry";
// }
// const result = machTorkari("ilsha", "potato","jinjar")
// console.log(result);
// console.log("-----------------------------")

// let aroAdd = result+console.log("bhat er sathe mishao")+console.log('kheye felo')
// console.log(aroAdd);



// function reverseNum(num){
//     num += "";
//     let rev = num.split("").reverse().join("");
//     console.log(rev);
    
// }
// reverseNum(32243)

// function calcuDiscount(price){
// let  discount= price*  15/100;
//  console.log("discount is: ",discount)
//  let totalPrice = price-discount
//  console.log("You Give taka: ",totalPrice)
// }

// calcuDiscount(1725)

// function ageVerification (age){
//     if(age>=21){
//         return "You are valid for Marry";
//     }
//     else{
//         return "You are not Valid for Marry";
//     }
// }

// const result= ageVerification(20);
// console.log(result)

// function convertTemperature(celsius){
//     let faren = (celsius* 9/5)+32
//     console.log(faren,"degree farenhit");
// }

// convertTemperature(34)

// function convertTemperature(farenhit){
//     let celsius= (farenhit-32)*5/9;
//     console.log(celsius)
// }

// convertTemperature(104)

// function calArea(pie,radious,power){
//     area= pie*radious**power;
//     console.log(area)
// }
// calArea(3.1416,9,2);

// function tellFortune (numChildren, partnerName,location, jobTitle){
//     yourFortune= "You will be a "+jobTitle+" in "+location+ "and married to "+partnerName+ " with "+ numChildren + " kids";
//     console.log(yourFortune)
// }

//  const value =tellFortune(11,"isha","Dhaka,Bangladesh","cse-engineer")

// function calculateDogAge(age){
//     let dogYears = age*7;
//     console.log("Your doggie is " + dogYears + " years old in dog years!")
// }
// calculateDogAge(4)

// function calculateSupply(age,amount){
//     maxAge=100;
//     totalAmount=(amount*365)*(maxAge-age)
//     console.log("You will need " +totalAmount+ " to last you until the ripe old age of X")
// }
// calculateSupply(12,65000)

// function celsiusToFahrenheit (calsius){
//    let faren = (calsius*9/5)+32 ;
//    console.log(faren)
//    return faren;
// }
// let value= celsiusToFahrenheit(35);

// frenhight=value+20;
// console.log(frenhight);

function fahrenheitToCelsius(faren){
    celsius=(faren-32)*5/9;
    console.log(celsius)
}
fahrenheitToCelsius(105)





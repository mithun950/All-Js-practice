function isNumber (number){
    if(number%2===0){
       let result=(number*2)
      return result;
        
    }
    else{
     let   result =number/2;
     return result;
    }
    
}
let total = isNumber(15);
console.log(total)
console.log(";;;;;;;;;;;;;;;;;;;;;")
const finalResult = total+30;
console.log(finalResult)
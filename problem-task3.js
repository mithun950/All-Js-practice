function repeatArray (array){

    repeat=[];
       for(const arr of array){
        if (arr===arr){
          repeat.push(arr);
        }
        
       }
    
   return repeat;
}


const value = repeatArray([5,6,11,12,98, 5]);
console.log(value)
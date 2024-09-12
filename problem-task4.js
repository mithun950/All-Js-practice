function findSearch (str){
   const vowels = ["a","e","i","o","u"]
    let count = 0;
     
    for(let value of str){
        if(vowels.includes(value)){
            count++;
        }
        
}
return count;
}
const vawel= findSearch("amar shunar bangla ami tumae bhalobashi")
console.log(vawel)
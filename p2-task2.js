function minName (names){
  let  min = names[0];
  for(const num of names){
    if(num.length<min.length){
        min=num;
    }
  }
  return min;
}
const result= minName(['rahim', 'robin', 'ron', 'rashed']);
console.log(result)
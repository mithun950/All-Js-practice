function count_zero(binarystring) {

   binaryArray=binarystring.split('');
   console.log(binaryArray)
   const count0=binaryArray.filter(bit=>bit==="0").length;
    const count1=binaryArray.filter(bit=>bit==="1").length;
    return {count0,count1}
}
const value= count_zero("01010100001010001000100001")
console.log(value)
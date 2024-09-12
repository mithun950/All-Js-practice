const str = "i am A student a have a pen i am writing";
let count =0;

for(i=0;i<str.length;i++){
    if(str[i].toLowerCase()==="a"){
count++;
    }
}
console.log(count)
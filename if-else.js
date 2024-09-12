// let age = 16;
// let withAdelt = true;
// if(age>=15){
//     console.log("amake park e dhukte dibe ");
//     if(withAdelt){
//         console.log("apni gele taka nibe naa");
//     }
//     else{
//         console.log("amake park e dhukte dibe naa");
//     }
// }


//     else{
//         console.log("apni gele taka nibe")
//     }



//discount price ---------------------------------------------------------

// var birianyPrice = 500;
// if(birianyPrice<300){
//     console.log("ami 5 packet kinbo ")
// }
// else{
//     console.log("ami nibo naa");
// }

// wight 

// var weight= 19;

// if(weight<40  ){
//     console.log("I will marry her ")
// }
// else{
//     console.log("i can not marry her");
// }

// sallery-----------------------------------------

// let salary=2000;
// let isBcs= true;

// if(salary>20000){
//     console.log("ami barite tumar kotha bolbo");
// }
// else{
//     console.log("ami bolte parbo naa tumar kotha");
// }

// salary && height------------------------------------------------------

// let salary = 30000;
// let isBcs=true;
// let height=59;
// if(salary>25000 && height>60){
//     console.log("ami raji achi");
// }
// else{
//     console.log("ore biye korbo naa");
// }


// // eni prectice
// var amarBeton = 10000;
// var isRaji =false;
// if(amarBeton>20000){
//     console.log("ishar baba manbe");
// }
// else{
//     console.log("manbe naa")
// }


// salary && height && isBcs-----------------------complex--------------------------------------

// let salary=30000;
// let height=65;
// let isBcs = true;
// if(salary>25000 && height>69 && isBcs == true){   //ekhane jei kono ekta condition na manlei else e chole jabe
//     console.log("manbe");
// }
// else{
//     console.log("manbe naa");
// }

// salary || height || isBcs-----------------------complex--------------------------------------
// var salary = 40000;
// var isBcs = true;
// var height = 70;

// if(salary>30000 || isBcs == true || height>73){ //ekhane jei kono ekta condition true holei if print korbe
//     console.log("ami biye korbo");
// }
// else{
//     console.log("ami biye korbo naa")
// }

// salary && herCar || isBcs-----------------------complex--------------------------------------

// var salary = 25500;
// var herCar = true;
// var isBcs = true ;
// if((salary>20000 && herCar == true) || isBcs == true){
//     console.log('ami raji')
// }
// else{
//     console.log("ami raji naaaaaa");
// }


//discount -------------------------------------------------
// var price= 5000;
// if(price>=4000){
//     let discount = price * 30/100;
//     console.log(discount);
// }
// else{
//     console.log("nibo naaa")
// }


//discount er por payamount-----------------------------------

// var price = 5000;
// if(price>=2000){
//     let discount = price* 12/100;
//     console.log(discount);
//     let payAmount= price- discount;
//     console.log(payAmount);
// }

// if ,,,,,else if  use -----------------------------------------

// var price = 5000;
// if(price>=2500){ //ei condition mile gele ekhanei theme jabe r jodi na mile nicer conditon e dhuke jabe 
//     let discount = price * 10/100;
   
//     let payAmount = price- discount;
//     console.log(payAmount);
// }
// else if (price > 1200){
//     let discount= price* 50/100;
   
//     let payAmount = price-discount;
//     console.log(payAmount);
// }

// else if more --------------------------------------------

// var age =12;
// if (age>=25){
//     console.log('tumi cv joma dite parbe ');

// }
// else if(age>20){
//     console.log('tumi job partime job pabe');
// }
// else {
//     console.log('job paben naa tumar boyosh hoe naai')
// }

// else if more ---------------------------------

// var age = 30 ;
// var price= 3000;
// if (age>= 15){
//     var discount= price * 10/100;
//     console.log(discount);
//     var payAmount = price -discount;
//     console.log(payAmount) 
// }
// else if (age>10){
//     var discount= price * 50/100;
//     console.log(discount);
//     var payAmount = price -discount;
//     console.log(payAmount) ;
// }

//result grading with if else if -------------------------------------------
// var mark = 79;
// if(mark>100){
//     console.log('invalid');
// }
// else if(mark>=90){
//     console.log('Golden A+');
// }
// else if (mark>=80){
//     console.log(' A+') ;
// }
// else if(mark>=70){
//     console.log('A');
// }
// else if (mark>=60){
//     console.log('A-');

// }
// else if (mark>=50){
//     console.log('B');

// }
// else if (mark>=40){
//     console.log('B-');

// }
// else if (mark>=33){
//     console.log('D');

//  }
// else if (mark>=0){
//     console.log('Fail');

// }
// else{
//     console.log('invalid');

// }




// prompt diye korte cacchi grading-----------------------------------------
// var mark = prompt("Enter Your Makrs:");
// if(mark>100){
//     document.write('invalid');
// }
// else if(mark>=90){
//     document.write('Golden A+');
// }
// else if (mark>=80){
//     document.write(' A+') ;
// }
// else if(mark>=70){
//     document.write('A');
// }
// else if (mark>=60){
//     document.write('A-');

// }
// else if (mark>=50){
//     document.write('B');

// }
// else if (mark>=40){
//     document.write('B-');

// }
// else if (mark>=33){
//     document.write('D');

//  }
// else if (mark>=0){
//     document.write('Fail');

// }
// else{
//     document.write('invalid');

// }


// else if  more --------------------------------------------------

// let age = 55 ;
// let price = 1000;

//  if (age>=60){
//     var discount=price* 20/100;
//     console.log('Your discount price: ' +discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);
// }
// else if (age>=40){
//     var discount=price* 50/100;
//     console.log('Your discount price: ' + discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);
// }
// else if(age>=20){
//     var discount=price* 80/100;
//     console.log('Your discount price: ' +discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);

// }
// prompt diye korbo
// let age = 55 ;
// let price = 1000;

//  if (age>=60){
//     var discount=price* 20/100;
//     console.log('Your discount price: ' +discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);
// }
// else if (age>=40){
//     var discount=price* 50/100;
//     console.log('Your discount price: ' + discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);
// }
// else if(age>=20){
//     var discount=price* 80/100;
//     console.log('Your discount price: ' +discount);
//     var payAmount=price-discount;
//     console.log('You pay: ' +payAmount);

// }
// prompt diye korbo----------------------------------------------

// let age = prompt("enter your age: ");
// let price = prompt("enter your product price:");

//  if (age>=60){
//     var discount=price* 20/100;
//     document.write('Your discount price: ' + discount);
//     var payAmount=price-discount;
//     document.writeln(' <br/>   You pay: ' +payAmount);
// }
// else if (age>=40){
//     var discount=price* 50/100;
//     document.write('Your discount price: ' + discount);
//     var payAmount=price-discount;
//     document.writeln(' <br/> You pay: ' +payAmount);
// }
// else if(age>=20){
//     var discount=price* 80/100;
//     document.write(' Your discount price: ' +discount );
//     var payAmount=price-discount;
//     document.writeln('<br/>  You pay: ' +payAmount);

// }

// vote dite parbo kina-------------------------------------

// let age = 12
// if(age>=18){
//     console.log("You can vote")
// }
// else{
//     console.log("invalid")
// }



//shortcut bhabe kora jae -------------------------------------------------------
// let age =  19;

// age >= 18? console.log("You can vote") : console.log('invalid')

// shortcut diye discount--------------------------------------------

// let price= 2000;
// price>=3000?console.log('ami kinbo naaa'): console.log('kinbo onek gula ')


// shoutcut-------------------------------------------------------------------

// var price= 100;
// let isPassed=false;
// price = isPassed === false? console.log('jibon britha'): console.log('kichui korte parbo naa')

//aro shortcut-------------------------------------------------------------------

// var price = 5000;
// var isPassed= false;
// price= isPassed === true? console.log('0') : console.log(price+100)



// onk gulla condition ek sathe shoutcut-----------------------------------------

// var age = 20;
// let isvoted = true;
// age= isvoted === true? age>1 ? console.log (age/2 ): console.log(age/10) :console.log ('hobe naa kichu' )


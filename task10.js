var ticketPrice = 800;
var age = 9;
 
if(age>=60){
    var discount = ticketPrice* 15/100;
    console.log('Your discount: ' + discount); 
    var  payAmount= ticketPrice-discount;
    
    console.log("You pay: " +payAmount);   
}
else if(age>=10){
    var discount = ticketPrice* 50/100;
    console.log('Your discount: ' + discount);  
    var  payAmount= ticketPrice-discount;
    console.log("You pay: " +payAmount);   
}

 else if (age<10){
    console.log("Free");  
}


else{
    console.log(ticketPrice);  
}

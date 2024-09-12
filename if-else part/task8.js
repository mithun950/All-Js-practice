var score = 89;
var friendScore=39;
if(score>=80){
    if(friendScore>80){
        console.log("Go for lunch");  
    }
    else if (friendScore>=60){
        console.log("Goodluck next time");  
    }
    else if (friendScore>=40){
        console.log("message Unseen");  
    }
    else{
        console.log("Block your friend");  
    }
}
else{
    console.log("sleep and act sad");  
}
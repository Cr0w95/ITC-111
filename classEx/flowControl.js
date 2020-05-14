//Flow control
var fruits = ['apples','oranges','grapes','lemons','bananas'];
//fpr loops
for(var i = 0; i <fruits.length; i++){
    console.log(fruits[i]);
}
for(var i =fruits.length-1;i>= 0; i--){
    console.log(fruits[i]);
}

//If - Else
var number = 7;
function oddEven(number){
    if(number % 2 == 0){
        console.log(number +" is even.");
    }else{
        console.log(number + " is odd.");
    }
}

oddEven(15);

//while loops
/*
var i = 0;

while (i<10){
    console.log(i);
    i++;
}
var j =10;
while (j>=0){
    console.log(j);
    j--;
}*/
//forin loop - used to loop/iterate through properties of an object
//syntax: for(property in object){do stuff;}
/*
var user = {
    fName:"John",
    lName:"Johnson",
    age:21
};
var details ='';
var p;
for(p in user){
    details += user[p]+" ";
}
console.log(details);*/
//for of loop - used to iterate/loop throught elements in an array
//syntax: for(element of array){do stuff;}

var fruits = ['apple','orange','pear'];
var e;
for(e of fruits){
    console.log(e);
}
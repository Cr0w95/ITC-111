//Objects

//everything in javaScript is an object with 3 small exceptions (Strings, nunmbers and Booleans).center
//dates maths regualer expressions arrays functions object.center

//objects are variables

//objects have primative value and data type
//primative value are not objects and have 
//primative data type is the type of data. string, number,

var myObject = {
    //dataType:Value
    firstName: 'tom',
    lastName: 'thomson',
    age: 57,
    isMarried:false,

    displayFullName: function() {return this.firstName+' '+this.lastName;}
};
var name = myObject.displayFullName();
console.log(name.toString);

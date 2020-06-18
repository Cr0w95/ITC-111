//conditions else-ifs

//adds another condition to resolve in an if else block.center

var a = true;
var b = false; 
var c;
if(a||b){
    c= true;
}else if (b==true && a == false){
    c=false;
}else{
    c=true;
}
//nesting

//nesting is placing one object within an object
function hello(){
    var msg = 'hello ';
    function world(){ msg +='world.'}
    world();
    return msg;
}
console.log(hello());
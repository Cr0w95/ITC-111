// Selecting elements in variables
const clear = document.querySelector(".clear"); // selects the clear button
const dateElement = document.getElementById("date"); // shows todays date
const list = document.getElementById("list"); // where items live
const input = document.getElementById("input"); // get user input

// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST,id;

// get item from local storage 
let data = localStorage.getItem("TODO");

// checking if data is empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to last in list
    loadList(LIST);//load list into the interface
}else{
    // if data is not empty
    LIST = [];
    id = 0;
}

// load item into user interface 
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash)
    });
}

//clear item from user interface
clear.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});

//Show todays date
const options = {weekday:"long",month:"short",day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do 
function addToDo(toDo, id, done, trash){
    if(trash){ return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i> 
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>`;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

//after entering todo item, press enter to add the item
document.addEventListener("keyup", function (event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
                LIST.push({
                    name : toDo,
                    id : id,
                    done : false,
                    trash : false
                });
                //add item to local storage. MUST BE ADDED WHERE LIST ARRAY IS UPDATED.
                localStorage.setItem("TODO",JSON.stringify(LIST));
                id++;
        }
        input.value = "";
    }
});

//complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do 
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    const element = event.target; //return clicked element inside list
    const elementJob = element.attributes.job.value; //complete or delete
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(element == "delete"){
        removeToDo(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
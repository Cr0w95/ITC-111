//these are word array lists
//these arrays are for the current list or English lists
var greetings_En = ['Hello','How are you?','What\'s up','Nice to meet you.'];
var bodyParts_En = ['head','chest','back','arms','legs'];
var colors_En = ['red','orange','yellow','green','blue','indigo'];

var greetings_Sw = ['Hibari','Hibari gani?','Kuna nini?','Ni yema kukutana na wewe.'];
var bodyParts_Sw = ['kichwa','kifua','mgongo','mkono','mguu'];
var colors_Sw = ['nyekunu','chungwa','manjano','kijani','bluu','bluu ya kati'];


//varible to hold display word
var word = document.getElementById('wrd');

//variable to store current word
var crrWrd;
// variables to hold the current list and target list
var crrLst;
var trgLst;

//variables to hold index of word in its list
var ndx;
//boolean variable to hold flipped/not flipped state
var flipped = false;

function init(){
    //set current listvariable to equal to greetings_En array.container
    crrLst = greetings_En;
    //set current listvariable to equal to greetings_Sw array.container
    trgLst = greetings_En;

    //set current word to the first word in the crrlst
    crrWrd = crrLst[0];
    //set the 'word' display to equal the current word
    word.innerHTML = crrWrd;
    // set ndx variable to index of the current word in the current list
    ndx= crrLst.indexOf(crrWrd);
    // reset category list to default
    document.getElementById("category").selectedIndex = 0;
    // reset target list values to default
    document.getElementById("target1").selectedIndex = 0;
    document.getElementById("target2").selectedIndex = 0;
}
//change word list based on drop down catagory
function chgList(trg){
    switch(trg.value){
        case "greetings":
            crrLst = greetings_En;
            trgLst = greetings_Sw;
            word.innerHTML = crrLst[ndx];
            break;
        case "bodyParts":
            crrLst = bodyParts_En;
            trgLst = bodyParts_Sw;
            word.innerHTML = crrLst[ndx];
            break;
        case "colors":
            crrLst = colors_En;
            trgLst = colors_Sw;
            word.innerHTML = crrLst[ndx];
            break;
    }
}

function prvWrd(){
    if(ndx > 0){
        ndx--;
    }else{
        ndx = (crrLst.length - 1);
    }
    word.innerHTML = crrLst[ndx];
}

function flipWrd(){
    if(flipped){
        word.innerHTML = crrLst[ndx];
        flipped = false;
    }else{
        word.innerHTML = trgLst[ndx];
        flipped = true;
    }
}

function nxtWrd(){
    if(ndx < (crrLst.length-1)){
        ndx++;
    }else{
        ndx = 0;
    }
    word.innerHTML = crrLst[ndx];
}
//change current list based on which option is chosen from the drop down list
function setList(trg){
    switch(trg.id){
        case "target1":
            if(trg.value == "English"){
                crrLst = greetings_En;
            }else{
                crrLst = greetings_Sw;
            }
            word.innerHTML = crrLst[ndx];
            break;
        case "target2":
            if(trg.value == "English"){
                trgLst = greetings_En;
            }else{
                trgLst = greetings_Sw;
            }
            word.innerHTML = crrLst[ndx];
            break;
    }
}

// swap crrLst and trgLst
function swapTargets(){
    var trg1 = document.getElementById("target1").value;
    var trg2 = document.getElementById("target2").value;
    var trgTmp = trg1;
    document.getElementById("target1").value = trg2;
    document.getElementById("target2").value = trgTmp;

    var tmpLst = crrLst;
    crrLst = trgLst;
    trgLst = tmpLst;
    word.innerHTML = crrWrd;
}
document.onload = init();

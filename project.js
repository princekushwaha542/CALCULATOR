// input 
let input = document.querySelector("#input");
let btn = document.querySelectorAll("button");

let string = "";
let arr = Array.from(btn);

// ======================
// BUTTON CLICK HANDLING
// ======================
arr.forEach(button =>{
    button.addEventListener("click",(e) =>{
        handleInput(e.target.innerHTML);
    });
});


document.addEventListener("keydown", function(e){

    // allowed keys
    let key = e.key;

    if("0123456789+-*/.%".includes(key)){
        handleInput(key);
    }
    else if(key === "Enter"){
        handleInput("=");
    }
    else if(key === "Backspace"){
        handleInput("DEL");
    }
    else if(key === "Escape"){
        handleInput("AC");
    }
});


function handleInput(value){
    if(value == '='){
        string = eval(string);
        input.value = string;
    }
    else if(value == 'AC'){
        string = "";
        input.value = string;
    }
    else if(value == 'DEL'){
        string = string.slice(0, -1);
        input.value = string;
    }
    else{
        string += value;
        input.value = string;
    }
}

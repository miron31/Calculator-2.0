let input = document.querySelector('.input');

function one(){
    input.value += 1;
}

function two(){
    input.value += 2;
}

function three(){
    input.value += 3;
}

function four(){
    input.value += 4;
}

function five(){
    input.value += 5;
}

function six(){
    input.value += 6;
}

function seven(){
    input.value += 7;
}

function eight(){
    input.value += 8;
}

function nine(){
    input.value += 9;
}

function zero(){
    input.value += 0;
}

function point(){
    input.value += '.';
}

function mul(){
    input.value += '*';
}

function division(){
    input.value += '/';
}

function sum(){
    input.value += '+';
}

function diff(){
    input.value += '-';
}

function result(){
        
    let val = input.value;

    input.value = eval(val);
    
}

function left_brack(){
    input.value += '(';
}

function right_brack(){
    input.value += ')';
}

function clear(){
    let btn = document.querySelector('.C');

    btn.addEventListener('click', () => {
        input.value = "";
    })
}

clear();
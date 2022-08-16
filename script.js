//This function receive the information and displays it on the screen
function insert(button){
    let number = document.getElementById('result').innerHTML;

        if((button == 0) && (number == '')){
            document.getElementById('result').innerHTML = '';
        }
        else if(((button == '+') || 
                (button == 'x') || 
                (button == '%') || 
                (button == '/')) && (number == '')){
            document.getElementById('result').innerHTML = '';
        }else{
            document.getElementById('result').innerHTML = number + button;
        }
}

//This function erases text on screen
function clearResult(){
    document.getElementById('result').innerHTML = '';
}

//This function executes the math behind the calculator
function equal(){
    let equalResult = document.getElementById('result').innerHTML;

    if(equalResult){
                                                //native JS function that solves math problems from strings
        document.getElementById('result').innerHTML = eval(equalResult);
    }else{
        document.getElementById('result').innerHTML = 'Nothing to calculate!';
    }
}

//This function erases the last information inserted
function backspace(){
    let back = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = back.substring(0, back.length - 1);
}
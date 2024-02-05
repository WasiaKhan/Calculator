let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

var mapOpr = {
    "×":"*",
    "÷":"/",
    
 };
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let val = e.target.value;
        if (val == '='){
            string = eval(string.replace(/÷|×/gi, function (matched) {
                return mapOpr[matched];
            })); 
        }
        else if (val == 'AC'){
            string = "";
        }
        else if (val == 'DEL'){
            string = string.slice(0,string.length-1);
            string = string == "" ? "" : string;
        }
        else if (val == '%'){
            string = eval(string / 100);
        }
        else{
            string += val;
            
        }
        input.value = string;
    })
})


function restrictAlphabets(e) { 
    e.preventDefault();
    // allows only numbers in input
    // var x=e.which || e.keycode;
    // if ((x >=48 && x <=57)){
    //     return true;
    // } 
    // else {return false;}
}


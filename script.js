let string = "";
let buttons = document.querySelectorAll('.button');
let result = document.getElementById("input");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            result.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            result.value = string;

        }
        else if (e.target.innerHTML == 'DE') {
            
            result.value = result.value.slice(0, -1);
        }

        else {

            string = string + e.target.innerHTML;
            result.value = string;
        }
    })
})
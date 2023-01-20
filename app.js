
let out = "";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            out = eval(out);
            document.querySelector('input').value = out;
        }
        else if (
            e.target.innerHTML == 'C'
        ) {
            out = ""
            document.querySelector('input').value = out;
        }
        else {

            console.log(e.target)
            out = out + e.target.innerHTML;
            document.querySelector('input').value = out;
        }
    })
})
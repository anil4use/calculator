
let kkkk ="";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            kkkk = eval(kkkk);
            document.querySelector('input').value = kkkk;
        }
        else if(
            e.target.innerHTML == 'C'
        ){
            kkkk =""
            document.querySelector('input').value = kkkk;
        }
        else{

            console.log(e.target)
            kkkk = kkkk + e.target.innerHTML;
            document.querySelector('input').value = kkkk;
        }
    })
})
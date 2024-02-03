let input = ""
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=="="){
            input = eval(input)
            document.querySelector('input').value = input;
            console.log(input)
        }else if(e.target.innerHTML=="ers"){
            input = input.toString().slice(0,-1)
            document.querySelector('input').value = input
        }else{
            console.log(e.target.innerText)
        input=input+e.target.innerHTML;
        document.querySelector('input').value = input
        }
    })
})
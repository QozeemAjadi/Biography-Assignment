const Button = document.getElementById('btn')

const span = document.getElementById('span')
const js = document.getElementById('js')

Button.addEventListener("click", function(){
    span.classList.add('js')
    js.classList.remove('js')
})
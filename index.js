const item1 = window.document.getElementById("top")
const item2 = window.document.getElementById("midle")
const item3 = window.document.getElementById("bottom")
const box = window.document.getElementById("caixa")
const titulo = window.document.getElementById("indice")

box.addEventListener("click", clicar)
let estado = false

function clicar(){
    if(estado == false){
        box.style.backgroundColor="red"
        titulo.innerHTML = "Fechar"
        titulo.style.color="red"
        estado = true

        item1.style.transform="rotate(135deg)"
        item2.style.transform="rotate(-135deg)"
        item1.style.top="+25px"
        item2.style.top="-5px"
        item3.style.opacity="0"


    }else{
        box.style.backgroundColor="seagreen"
        titulo.innerHTML = "Abrir"
        titulo.style.color="white"
        estado = false

        item1.style.transform="rotate(0deg)"
        item2.style.transform="rotate(0deg)"
        item1.style.top="0px"
        item2.style.top="0px"
        item3.style.opacity="1"
    }
}
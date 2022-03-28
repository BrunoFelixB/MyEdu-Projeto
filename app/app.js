
let menu = document.getElementById("textmenu")
let menuSus = document.getElementById("menuSus")
let btFechar = document.getElementById("button")

menu.addEventListener('click', abrir)

function abrir () {
    menu.classList.toggle('true')
    menuSus.classList.toggle('true')
}

btFechar.addEventListener('click', fechar) 

function fechar () {
    menuSus.classList.toggle('true')
}

let caixaDeBusca = document.getElementById("text-buscar")
let input = document.getElementById("input-busca")

caixaDeBusca.addEventListener('click', expandir)

function expandir () {
    caixaDeBusca.classList.toggle('expandida')
    input.classList.toggle('expandida')
}
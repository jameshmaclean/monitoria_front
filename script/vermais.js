function vermais() {
    var elemento = document.getElementById("oculto")
    elemento.classList.remove('container-hidden')
    elemento.classList.add('container')
   
}
function alterarModo(){
    var elemento = document.getElementById("corpo")

    var nome = elemento.className

    if (nome=='corpo'){
        elemento.classList.remove('corpo')
        elemento.classList.add('corpo-modo-claro')
    } else {
        elemento.classList.add('corpo')
        elemento.classList.remove('corpo-modo-claro')
    }

}
function selecionarPrato(prato){
    let pratoSelecionado = document.querySelector(".prato-selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("prato-selecionado")
    }

    prato.classList.add("prato-selecionado")

    console.log(prato)
}

function selecionarBebida(bebida){
    let bebidaSelecionada = document.querySelector(".bebida-selecionada");

    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("bebida-selecionada")
    }

    bebida.classList.add("bebida-selecionada")
}

function selecionarSobremesa(sobremesa){
    let sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");

    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("sobremesa-selecionada")
    }

    sobremesa.classList.add("sobremesa-selecionada")
}

function finalizarPedido(){
    let prato = document.querySelector(".prato-selecionado")
    let bebida = document.querySelector(".bebida-selecionada");
    let sobremesa = document.querySelector(".sobremesa-selecionada")

    if (prato !== null && bebida !== null && sobremesa !== null) {
        document.querySelector("button").classList.add("botao-habilitado")
        document.querySelector("button").innerHTML = "Fechar pedido"
    }
}



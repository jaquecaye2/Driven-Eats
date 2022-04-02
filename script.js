function selecionarPrato(prato){
    // Adicionar a borda
    let pratoSelecionado = document.querySelector(".prato-selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("prato-selecionado")
    }

    prato.classList.add("prato-selecionado")

    // Adicionar o checkbox
    let checkAtivado = document.querySelector(".icone-prato")

    if (checkAtivado !== null) {
        checkAtivado.classList.remove("icone-prato")
    }

    prato.querySelector("ion-icon").classList.add("icone-prato")

    mudarBotaoFinalizar()
}

function selecionarBebida(bebida){
    let bebidaSelecionada = document.querySelector(".bebida-selecionada");

    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("bebida-selecionada")
    }

    bebida.classList.add("bebida-selecionada")

    let checkAtivado = document.querySelector(".icone-bebida")

    if (checkAtivado !== null) {
        checkAtivado.classList.remove("icone-bebida")
    }

    bebida.querySelector("ion-icon").classList.add("icone-bebida")

    mudarBotaoFinalizar()
}

function selecionarSobremesa(sobremesa){
    let sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");

    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("sobremesa-selecionada")
    }

    sobremesa.classList.add("sobremesa-selecionada")

    let checkAtivado = document.querySelector(".icone-sobremesa")

    if (checkAtivado !== null) {
        checkAtivado.classList.remove("icone-sobremesa")
    }

    sobremesa.querySelector("ion-icon").classList.add("icone-sobremesa")

    mudarBotaoFinalizar()
}

function mudarBotaoFinalizar(){
    let prato = document.querySelector(".prato-selecionado")
    let bebida = document.querySelector(".bebida-selecionada");
    let sobremesa = document.querySelector(".sobremesa-selecionada")

    if (prato !== null && bebida !== null && sobremesa !== null) {
        document.querySelector("button").classList.add("botao-habilitado")
        document.querySelector("button").innerHTML = "Fechar pedido"
    }
}

function finalizarPedido(){
    let botaoHabilitado = document.querySelector(".botao-habilitado")

    let prato = document.querySelector(".prato-selecionado").querySelector("h3").innerHTML
    let valorPrato = document.querySelector(".prato-selecionado").querySelector("h4").innerHTML
    let valorPratoNumber = Number(valorPrato.slice("3","8").replace(",","."))

    let bebida = document.querySelector(".bebida-selecionada").querySelector("h3").innerHTML
    let valorBebida = document.querySelector(".bebida-selecionada").querySelector("h4").innerHTML
    let valorBebidaNumber = Number(valorBebida.slice("3","8").replace(",","."))


    let sobremesa = document.querySelector(".sobremesa-selecionada").querySelector("h3").innerHTML
    let valorSobremesa = document.querySelector(".sobremesa-selecionada").querySelector("h4").innerHTML
    let valorSobremesaNumber = Number(valorSobremesa.slice("3","8").replace(",","."))
    
    let somaValores = valorPratoNumber + valorBebidaNumber + valorSobremesaNumber

    if (botaoHabilitado !== null){
        let celular = "5555997048940"

        let mensagem = `Olá, gostaria de fazer o *pedido*: \n *- Prato*: ${prato} \n *- Bebida*: ${bebida} \n *- Sobremesa*: ${sobremesa} \n *Total*: R$*${somaValores.toFixed(2)}*`

        mensagem = window.encodeURIComponent(mensagem)
        window.open(`https://wa.me/${celular}?text=${mensagem}`)
    }
}



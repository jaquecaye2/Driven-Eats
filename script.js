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
    // Adicionar a borda
    let bebidaSelecionada = document.querySelector(".bebida-selecionada");

    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("bebida-selecionada")
    }

    bebida.classList.add("bebida-selecionada")

    // Adicionar o checkbox
    let checkAtivado = document.querySelector(".icone-bebida")

    if (checkAtivado !== null) {
        checkAtivado.classList.remove("icone-bebida")
    }

    bebida.querySelector("ion-icon").classList.add("icone-bebida")

    mudarBotaoFinalizar()
}

function selecionarSobremesa(sobremesa){
    // Adicionar a borda
    let sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");

    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("sobremesa-selecionada")
    }

    sobremesa.classList.add("sobremesa-selecionada")

    // Adicionar o checkbox
    let checkAtivado = document.querySelector(".icone-sobremesa")

    if (checkAtivado !== null) {
        checkAtivado.classList.remove("icone-sobremesa")
    }

    sobremesa.querySelector("ion-icon").classList.add("icone-sobremesa")

    mudarBotaoFinalizar()
}

function mudarBotaoFinalizar(){
    // função para colocar fundo verde e mudar texto do botao de finalizar pedido
    let prato = document.querySelector(".prato-selecionado")
    let bebida = document.querySelector(".bebida-selecionada");
    let sobremesa = document.querySelector(".sobremesa-selecionada")

    if (prato !== null && bebida !== null && sobremesa !== null) {
        document.querySelector("button").classList.add("botao-habilitado")
        document.querySelector("button").innerHTML = "Fechar pedido"
    }
}

let prato;
let valorPratoNumber;
let sobremesa;
let valorSobremesaNumber;
let bebida;
let valorBebidaNumber;
let somaValores;

function revisarPedido(){
    let botaoHabilitado = document.querySelector(".botao-habilitado")

    if (botaoHabilitado !== null){
        // adiciona a página com a caixa verde de confirmar o pedido
        document.querySelector(".revisar-compra").classList.remove("escondido")

        // realiza a busca dos nomes dos pratos e após substitui eles no local correto da caixa verde
        prato = document.querySelector(".prato-selecionado").querySelector("h3").innerHTML
        let valorPrato = document.querySelector(".prato-selecionado").querySelector("h4").innerHTML
        valorPratoNumber = Number(valorPrato.slice("3","8").replace(",","."))
        
        document.querySelector(".confirmarPrato").querySelector("h6").innerHTML = prato
        document.querySelector(".confirmarPrato").querySelector("p").innerHTML = `R$ ${valorPratoNumber.toFixed(2).replace(".",",")}`

        // realiza a busca dos nomes das bebidas e após substitui eles no local correto da caixa verde
        bebida = document.querySelector(".bebida-selecionada").querySelector("h3").innerHTML
        let valorBebida = document.querySelector(".bebida-selecionada").querySelector("h4").innerHTML
        valorBebidaNumber = Number(valorBebida.slice("3","8").replace(",","."))

        document.querySelector(".confirmarBebida").querySelector("h6").innerHTML = bebida
        document.querySelector(".confirmarBebida").querySelector("p").innerHTML = `R$ ${valorBebidaNumber.toFixed(2).replace(".",",")}`

        // realiza a busca dos nomes das sobremesas e após substitui eles no local correto da caixa verde
        sobremesa = document.querySelector(".sobremesa-selecionada").querySelector("h3").innerHTML
        let valorSobremesa = document.querySelector(".sobremesa-selecionada").querySelector("h4").innerHTML
        valorSobremesaNumber = Number(valorSobremesa.slice("3","8").replace(",","."))

        document.querySelector(".confirmarSobremesa").querySelector("h6").innerHTML = sobremesa
        document.querySelector(".confirmarSobremesa").querySelector("p").innerHTML = `R$ ${valorSobremesaNumber.toFixed(2).replace(".",",")}`

        // realiza a soma dos valores dos itens selecionados
        somaValores = valorPratoNumber + valorBebidaNumber + valorSobremesaNumber
        document.querySelector(".confirmarTotal").querySelector("p").innerHTML = `R$ ${somaValores.toFixed(2).replace(".",",")}`
    }
}

function finalizarPedido(){
    let nome = prompt("Informe seu nome?")
    let endereco = prompt("Informe seu endereço")

    if (nome === "" || endereco === ""){
        alert("Informe seus dados corretamente")
    } else if (nome === null || endereco === null) {
        alert("Informe seus dados corretamente")
    } else {
        let celular = "5555997048940"

        let mensagem = `Olá, gostaria de fazer o *pedido*: \n *- Prato*: ${prato} \n *- Bebida*: ${bebida} \n *- Sobremesa*: ${sobremesa} \n *Total*: R$*${somaValores.toFixed(2)}* \n \n Nome: ${nome} \n Endereço: ${endereco}`

        mensagem = window.encodeURIComponent(mensagem)
        window.open(`https://wa.me/${celular}?text=${mensagem}`)

        document.querySelector(".revisar-compra").classList.add("escondido")
    }
}

function cancelarPedido(){
    document.querySelector(".revisar-compra").classList.add("escondido")
}

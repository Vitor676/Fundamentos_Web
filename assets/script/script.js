let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')//.assunto -> class
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function verificarCampos(){
    if(nome.value =='' || email.value == "" || assunto.value ==""){
        alert("o campo é obrigatorio")
    }else{
        alert("Sucesso ao enviar os dados")
    }
}

function ola(){

    alert("Olá Visitante!")
}

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
     txtNome.innerHTML = "Nome Inválido"
     txtNome.style.color = "red"
    }else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "black"
        nomeOk = true
    }

}

function validaEmail() {
   let txtEmail = document.querySelector("#txtEmail")

   if (email.value.indexOf("@") == -1 || email.value.indexOf('.') == -1){
     txtEmail.innerHTML = "Email Inválido"
     txtEmail.style.color = "red"
    }else {
    txtEmail.innerHTML = "Email Válido"
    txtEmail.style.color = "black"
    emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
     txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
     txtAssunto.style.color = "red"
     txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!!")
    }else{
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
   mapa.style.width = "800px"
   mapa.style.height = "700px"
}

function mapaNormal() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}
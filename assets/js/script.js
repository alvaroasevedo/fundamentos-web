let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
nome.style.width = '50%'
email.style.width = '50%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
         nomeOK = true

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
        email.color = "green"
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOK = true

        
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 10) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = "block"

    } else{
        txtAssunto.style.display = "none"
         assuntoOK = true


    }
}

    function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
      }else{
        alert ('Preencha o formulário corretamente antes de enviar!')
    }
}


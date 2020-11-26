let email=document.getElementById('email')
let motivo=document.getElementById('motivo')
let adicional=document.getElementById('adicional')
let emailOK = false
let motivoOK = true
let assuntoOK = false


function validacaoEmail(){
    let txtEmail = document.getElementById('txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        emailOK = false
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOK = true
    }

}

function validacaoAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')

    if(adicional.value.length > 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOK = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }

}

function enviar(){

    if(motivoOK == true && emailOK == true && assuntoOK == true){
        alert('Formulario enviado com sucesso!')
    }else{
        alert('Preencha o formulario corretamente antes de enviar...')
    }

}
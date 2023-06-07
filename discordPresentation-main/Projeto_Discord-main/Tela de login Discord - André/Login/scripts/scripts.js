
import data from "../mockdata.js";

let btnEntrar = document.querySelector("#btnEntrar")

btnEntrar.addEventListener("click", validarLogin)

//função para verificar se o email já está cadastrado e fazer o login
function validarLogin() {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let logar = false;

    //Verificando se o campo do email está vazio
    if (email === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira um E-mail !',
            toast: true,
            position: 'top-end',
            timer: 3000
        })
        return
    }
    
    //Verificando se o campo da senha está vazia
    if (password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira uma senha !',
            toast: true,
            position: 'top-end',
            timer: 3000
        })
        return
    }

    //usando loop para verificar dentro dos meus objetos para verificar se já está cadastrado dentro da plataforma
    data.forEach( item => {
        if(email === item.email && password === item.senha) {
            logar = true
        }
    });
    
    //verificando se os email e senha estão corretos
    if(logar) {
        console.log('Logado')
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ou senha invalidos !',
            toast: true,
            position: 'top-end',
            timer: 3000
        })
        return
    }
}
import data from "./mockdata.js"

let btnContinuar = document.querySelector("#btnContinuar")

btnContinuar.addEventListener("click", validarCadastro)

function validarCadastro() {
    let email = document.querySelector("#iptEmail").value
    let nomeUsuario = document.querySelector("#iptName").value
    let senha = document.querySelector("#iptPassword").value
    let dia = document.querySelector("#dia").value
    let mes = document.querySelector("#mes").value
    let ano = document.querySelector("#ano").value

    //verificando se os campos estão vazios
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

    if (nomeUsuario === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira um nome de usuário !',
            toast: true,
            position: 'top-end',
            timer: 3000
        })
        return
    }

    if (senha === '') {
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

    if (dia === '' || mes === '' || ano === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira sua Data de nascimento !',
            toast: true,
            position: 'top-end',
            timer: 3000
        })
        return
    }

    //verificando se o email e nome de ususário já está cadastrado
    data.find(usuario => {
        if (email === usuario.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'E-mail já cadastrado!',
                toast: true,
                position: 'top-end',
                timer: 3000
            })
        }

        if (nomeUsuario === usuario.nome) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário já cadastrado !',
                toast: true,
                position: 'top-end',
                timer: 3000
            })
        }

    })


    //vericando se está tudo correto para liberar o usuário
    if (email && nomeUsuario && senha && dia && mes && ano) {
        Swal.fire({
            icon: 'success',
            title: 'Bem vindo ao Discord',
            timer: 3000
        })
    }

}
import data from "../Scripts/mockData.js";

let btnEntrar = document.querySelector("#btnEntrar")

btnEntrar.addEventListener("click", validar)

function validar() {
  // recebendo os valores do input email
  let emailConfirm = document.querySelector("#emailEsq").value
  let logar = false;

  //verificando se o campo está em branco
  if (emailConfirm === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Insira um E-mail !',
      toast: true,
      position: 'top-end',
      timer: 3000
    })
  }

  //verificando se o email está realmente cadastrado
  data.forEach(item => {
    if(emailConfirm === item.email) {
        logar = true
    }
  });

  //POP-UP notificando o usuário que o email já fi enviado
  if(logar) {
    Swal.fire({
      title: '<strong>E-mail Enviado<u></u></strong>',
      icon: 'success',
      html:
        '<b>Verifique-o</b> ' +
        '<a href="https://mail.google.com/"><b>E-mail</b></a> ',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i>Ook',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down">Cancelar</i>',
      cancelButtonAriaLabel: 'Thumbs down',
      toast: true,
      position: 'top-end',
      timer: 3000
    })
    console.log('Email Cadastrado')
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'E-mail não cadastrado !',
      toast: true,
      position: 'top-end',
      timer: 3000
    })
  }
}
const nomeCad = document.getElementById('nome-cad')
const emailCad = document.getElementById('email-cad')
const telCad = document.getElementById('tel-cad')
const senhaCad = document.getElementById('senha-cad')

const emailLog = document.getElementById('email-log')
const senhaLog = document.getElementById('senha-log')

const btnCad = document.getElementById('btn-cad')
const btnLog = document.getElementById('btn-log')

const erroCad = document.getElementById('erro-cad')
const erroLog = document.getElementById('erro-log')

window.onload = () => {
  document.getElementById('btn-cad').addEventListener('click', () => {
    if(!nomeCad.value || !emailCad.value || !telCad.value || !senhaCad.value) {
      erroCad.style.visibility = 'visible'
    }
    else {
      erroCad.style.visibility = 'hidden'
    }
  })

  document.getElementById('btn-log').addEventListener('click', () => {
    if(!emailLog.value || !emailLog.value) {
      erroLog.style.visibility = 'visible'
    }
    else {
      erroLog.style.visibility = 'hidden'
    }
  })

  document.getElementById('cadastro-login').addEventListener('click', () => {
    window.location = './cadastro_login.html'
  })
}
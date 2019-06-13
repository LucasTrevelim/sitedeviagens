const numCad = document.getElementById('num-cad')
const dataVal = document.getElementById('data-val')
const codSeg = document.getElementById('cod-seg')
const pag = document.getElementById('pag')
const cpfPag = document.getElementById('cpf-pag')

const erroCompra = document.getElementById('erro-compra')

window.onload = () => {
  document.getElementById('botao-comprar').addEventListener('click', () => {
    if(numCad.value && dataVal.value && codSeg.value && pag.value && cpfPag.value) {
      erroCompra.style.visibility = 'hidden'
      window.location = 'compra_finalizada.html'
    }
    else {
      erroCompra.style.visibility = 'visible'
    }
  })

  document.getElementById('cadastro-login').addEventListener('click', () => {
    window.location = './cadastro_login.html'
  })
}
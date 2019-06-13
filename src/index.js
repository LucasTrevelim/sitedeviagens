const selectDiaIda = document.getElementById('dia-ida')
const selectMesIda = document.getElementById('mes-ida')
const selectAnoIda = document.getElementById('ano-ida')

const diaIdaFinal = document.getElementById('dia-ida-final')
const mesIdaFinal = document.getElementById('mes-ida-final')
const anoIdaFinal = document.getElementById('ano-ida-final')

const diaVoltaFinal = document.getElementById('dia-volta-final')
const mesVoltaFinal = document.getElementById('mes-volta-final')
const anoVoltaFinal = document.getElementById('ano-volta-final')

const selectDiaVolta = document.getElementById('dia-volta')
const selectMesVolta = document.getElementById('mes-volta')
const selectAnoVolta = document.getElementById('ano-volta')

const destino = document.getElementById('destino')
const erroCampos = document.getElementById('erro-preencher-campos')
const resultados = document.getElementById('resultados-busca')

window.onload = () => {
  for(let i = 1; i <= 31; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectDiaIda.appendChild(option)
  }

  for(let i = 1; i <= 31; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectDiaVolta.appendChild(option)
  }

  for(let i = 1; i <= 12; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectMesIda.appendChild(option)
  }

  for(let i = 1; i <= 12; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectMesVolta.appendChild(option)
  }

  for(let i = 19; i <= 25; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectAnoIda.appendChild(option)
  }

  for(let i = 19; i <= 25; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectAnoVolta.appendChild(option)
  }

  document.getElementById('botao-pesquisa').addEventListener('click', () => {
    if(selectDiaIda.value && selectDiaVolta.value && selectMesIda.value && selectMesVolta.value && selectAnoIda.value && selectAnoVolta.value && destino.value) {
      erroCampos.style.visibility = 'hidden'
      resultados.style.visibility = 'visible'

      diaIdaFinal.innerHTML = selectDiaIda.value
      mesIdaFinal.innerHTML = selectMesIda.value
      anoIdaFinal.innerHTML = selectAnoIda.value

      diaVoltaFinal.innerHTML = selectDiaVolta.value
      mesVoltaFinal.innerHTML = selectMesVolta.value
      anoVoltaFinal.innerHTML = selectAnoVolta.value
    }
    else {
      erroCampos.style.visibility = 'visible'
      resultados.style.visibility = 'hidden'
    }
  })

  document.getElementById('cadastro-login').addEventListener('click', () => {
    window.location = './cadastro_login.html'
  })

  document.getElementById('botao-continuar').addEventListener('click', () => {
    window.location = './comprar.html'
  })

}


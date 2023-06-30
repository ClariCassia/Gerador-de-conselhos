const btnNovoConselho = document.querySelector('.btn-novo-conselho');
let idConselho = document.getElementById('id-conselho')
let conselho = document.querySelector('.conselho')


async function gerarConselhosAleatorios() {
  const resposta = await fetch('https://api.adviceslip.com/advice')
  const infoConselho = await resposta.json();   
  idConselho.innerHTML = `ADVICE &nbsp #${infoConselho.slip.id}` 
  conselho.innerHTML = infoConselho.slip.advice
  
}

btnNovoConselho.addEventListener("click", gerarConselhosAleatorios)

gerarConselhosAleatorios()
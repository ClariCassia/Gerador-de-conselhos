const btnNovoConselho = document.querySelector('.btn-novo-conselho');
const numeroConselho = document.getElementById('id-conselho')
const novoConselho = document.querySelector('.conselho')
const urlBase = 'https://api.adviceslip.com/advice';

btnNovoConselho.addEventListener("click", gerarConselhosAleatorios)

async function geraIdConselhos() {

    const resposta = await fetch(urlBase);
    const conselhos = await resposta.json();
    return conselhos.slip.id

}

async function gerarConselhosAleatorios() {

    const idConselho = await geraIdConselhos();
    numeroConselho.innerHTML = `ADVICE #&nbsp #${idConselho}`

    const resposta = await fetch(`${urlBase}/${idConselho}`);
    const conselho = await resposta.json();
    novoConselho.innerHTML = conselho.slip.advice
}

gerarConselhosAleatorios()
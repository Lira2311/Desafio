const imagens = document.querySelectorAll('img');
const input = document.querySelector('input');
const botao = document.querySelector('button');
const nomePersonagem = document.querySelectorAll('.nome-personagem');

let nomeDoPersonagem;

pegarPersonagem = async () => {
    function sortLink (n){
        const charactersId = []
        for ( var i=0; i<4; i++){
            charactersId.push(Math.floor(Math.random() * n) + 1)
        }
        return `https://rickandmortyapi.com/api/character/${charactersId.join()}`
    }
    var baseHtml = sortLink(671)

    const response = await fetch(baseHtml, {
        method: 'GET',
        headers: {
            Accept: 'aplication/json',
            "content-type" : 'aplication/json'
        }
    });
    const data = await response.json();
    const imagesList = data.map((character) => {return (character)})
    console.log(imagesList[0].image)
    for (var i=0; i<4; i++) {
        imagens[i].src = imagesList[i].image
        imagens[i].alt = imagesList[i].name
        nomePersonagem[i].innerHTML = imagesList[i].name
    }   
};

jogar = () => {
    pegarPersonagem();        
    if(nomeDoPersonagem == nomePersonagem){
        nomePersonagem.innerHTML = `O nome desse personagem é ${nomePersonagem}`;
    }
}

botao.onclick =jogar ;

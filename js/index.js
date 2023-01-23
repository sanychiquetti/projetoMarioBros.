
const botaoTrailer = document.querySelector(".botao-trailer"); // pegar o elemento que representa o botão na tela 
const video = document.getElementById("video");
const modal = document.querySelector(".modal"); // pegar o elemento da modal 
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

// criar função para abrir modal, visto que vamos usar mais de 1x.
function alternalModal(){
    modal.classList.toggle("aberto");
}

// identificar qdo o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
   //  abrir a modal na tela
   alternalModal();
   video.setAttribute("src", linkDoVideo);
});

//  identificar qdo o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    //  fechar a modal
    alternalModal();
    video.setAttribute("src", ""); // aqui vamos parar o video, retirando o endereço
});





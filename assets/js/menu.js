window.onload = function (){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        //clicou exibe menu, nao clicou, some com o menu
        if(document.querySelector(".menu nav ul").style.display =='flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
}
//Esconder botão e modal temporariamente
$("#botaoTrailer").hide().delay(3000).fadeIn("slow")
$(".modal").hide().delay(3000).fadeIn("slow")

//Modal
const modal = document.querySelector(".modal")

//Player 
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {

    height: '315',
    width: '560',
    videoId: '0QjzZWTvkNs',
    events: {

      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange

    }

  });

}

function onPlayerReady(event) {

  event.target.pauseVideo();

}

var done = false;
function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.PLAYING && !done) {

    (stopVideo, 6000);
    done = true;

  }

}

function stopVideo() {

  player.stopVideo();

}

//Abrir modal
const botaoTrailer = document.querySelector(".botao")
botaoTrailer.addEventListener("click", () => {

  modal.classList.add("aberto")
    
})

//Fechar modal
modal.addEventListener("click", () => {

  modal.classList.remove("aberto")
  player.pauseVideo()

})

//Sumir com a sugestão de vídeos Youtube

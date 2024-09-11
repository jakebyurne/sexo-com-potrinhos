const butao = document.getElementById('butao');
var audio = document.getElementById('audio');
butao.addEventListener('click', () => {

document.getElementById("butao").style.backgroundColor = "purple";
audio.volume = 0.300;
audio.play();
});
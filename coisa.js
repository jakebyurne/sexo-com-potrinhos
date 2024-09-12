const butao = document.getElementById('butao');
const hamter = document.getElementById('hamter');
var audio = document.getElementById('audio');
butao.addEventListener('click', () => {

    document.getElementById("hamter").style.display = "block";
document.getElementById("butao").style.backgroundColor = "black";
audio.volume = 0.300;
audio.play();
});
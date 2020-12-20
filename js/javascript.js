var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function() {
  if(mySong.paused) {
    mySong.play();
    icon.src = "img/icons8-pause-64.png";
  } else {
    mySong.pause();
    icon.src = "img/icons8-play-64.png";
  }

}

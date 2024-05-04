// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const imageElement = document.querySelector("#expose img");
  const volumeSelect = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("#expose button");
  const audioElement = document.querySelector("#expose audio");
  const jsConfetti = new JSConfetti()
  
  if (hornSelect){
    hornSelect.addEventListener("change", function(){
      if(this.value === "air-horn"){
        imageElement.src = "assets/images/air-horn.svg";
        audioElement.src = "assets/audio/air-horn.mp3";
      } else if (this.value === "car-horn"){
        imageElement.src = "assets/images/car-horn.svg";
        audioElement.src = "assets/audio/car-horn.mp3";
      } else if (this.value === "party-horn"){
        imageElement.src = "assets/images/party-horn.svg";
        audioElement.src = "assets/audio/party-horn.mp3";
      }
    })
  }
  playButton.addEventListener("click", function(){
    audioElement.play();
    if(hornSelect.value === "party-horn"){
      jsConfetti.addConfetti();
    }
  })
  if (volumeSelect){
    volumeSelect.addEventListener("input", function(){
      audioElement.volume = this.value /100;
      if(this.value == 0){
        volumeImage.src = "assets/icons/volume-level-0.svg";
      } else if(this.value < 33){
        volumeImage.src = "assets/icons/volume-level-1.svg";
      } else if(this.value < 67){
        volumeImage.src = "assets/icons/volume-level-2.svg";
      } else {
        volumeImage.src = "assets/icons/volume-level-3.svg";
      }
    })
  }


}
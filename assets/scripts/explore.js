// explore.js
const synth = window.speechSynthesis;

window.addEventListener('DOMContentLoaded', init);
let voices = [];

function populateVoiceList() {
  const voiceSelect = document.getElementById("voice-select");
  voices = synth.getVoices();
  
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
function init() {
  const voiceSelect = document.getElementById("voice-select");
  const playButton = document.querySelector("#explore button");
  const inputTxt = document.getElementById("text-to-speak");
  const speakerImg = document.querySelector("#explore img");

  playButton.addEventListener("click", function(){
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    speakerImg.src = "assets/images/smiling-open.png";

    utterThis.onend = function(event) {
      speakerImg.src = "assets/images/smiling.png";
    };


    inputTxt.blur();
  })
  
  
}
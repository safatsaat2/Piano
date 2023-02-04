const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); 

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)

}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    //  calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
   if(allKeys.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

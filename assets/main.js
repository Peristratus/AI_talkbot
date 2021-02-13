const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text){

    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");
}

recorder.onstart =() => {
    console.log('Voice activated');
};

recorder.onresult = (event) => {
//console.log(event);

const resultIndex = event.resultIndex;
const transcript = event.results[resultIndex][0].transcript;
voice2text.textContent = transcript;

};

voice.addEventListener('click', () =>{
recorder.start();

})


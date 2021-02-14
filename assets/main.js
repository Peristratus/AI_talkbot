const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text){

    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    const chatText =document.createTextNode(text);
    chatBox.appendChild(chatText)

    chatContainer.appendChild(chatBox)
    return chatContainer;
}

function addBotText(text) {
const chatContainer1 = document.createElement("div");
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");
    
    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    const chatText1 =document.createTextNode(text);
    chatBox1.appendChild(chatText1)

    chatContainer1.appendChild(chatBox1)
    return chatContainer1;

}

function botVoice(message){
   const speech = new SpeechSynthesisUtterance();
   speech.text = "Sorry, I did not understand that!";

   if (message.includes('how are you')) {
       speech.text = "I am fine, thanks. How are you ?";
     }  

    if (message.includes('hi')) {
       speech.text = "I am fine, thanks. How are you ?";
     }  

    if (message.includes('hello')) {
       speech.text = "I am fine, thanks. How are you ?";
     }  

    if (message.includes('fine')) {
       speech.text = "Nice to hear that, how can i assist you today ?";
    }

    if (message.includes('sick')) {
       speech.text = "what is wrong with you ?";
   }

   if (message.includes('temperature')) {
       speech.text = "what is your temperature ?";
    }

    if (message.includes('40 Celsius')) {
           speech.text = "That is a high temperature, do you have flu like symptoms, if you do then say I do or say no ?";
       }

    if (message.includes('I do')){
               speech.text = "You may have COVID 19, please go to your nearest emergency hospital, What is your first and last name ?"
        }
    if (message.includes('Jonathan Martin')) {
           speech.text = "I see you are a member and your doctor is Jane Korban, I will inform her of your situation, please go to the nearest hospital !";
       }
    if (message.includes('no')){
               speech.text = " That's good, will you like me to do something else for you today ? If you want me to book an appointment with your doctor say your first and last name, or say thank you to end this conversation ?";
        }

    if (message.includes('Philip Johnson')){
               speech.text = " What is your date of birth ? Please say Day, Month and Year so I can pull up your records";
        }
    
    if (message.includes('18th September 1978')){
               speech.text = " You are a member your doctor's name is Jane Amber, she will be able to see you on the 20th of February 2021 at 15:00";
        }
    
    if (message.includes('thank you')){
               speech.text = "Thank you have a nice day and keep safe, always wear a mask and wash your hands, your well beign is important to us?"
        }

    

   speech.volume = 1;
   speech.rate = 1;
   speech.pitch = 1;
   window.speechSynthesis.speak(speech);
   var element = document.getElementById("container");
   element.appendChild(addBotText(speech.text));
}

recorder.onstart =() => {
    console.log('Voice activated');
};

recorder.onresult = (event) => {
const resultIndex = event.resultIndex;
const transcript = event.results[resultIndex][0].transcript;
var element = document.getElementById("container");
element.appendChild(addHumanText(transcript));
botVoice(transcript);

};

voice.addEventListener('click', () =>{
recorder.start();

})


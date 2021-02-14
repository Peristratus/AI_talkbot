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
   // Key words
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

    if (message.includes(' High temperature')) {
       speech.text = "what is your temperature ?";
    }

    if (message.includes(' high blood pressure')) {
       speech.text = "what is your blood pressure ? If it is greater than 160/100 say greater , or say the same value ";
    }

    if (message.includes('appointment')) {
       speech.text = "what is the last four digits of your membership card ?";
    }


   //end Key Words 

    if (message.includes('40 Celsius')) {
           speech.text = "That is a high temperature, do you have flu like symptoms, if you do then say I do or say no ?";
       }

    if (message.includes('I do')){
               speech.text = "You may have COVID 19, please go to your nearest emergency hospital, What is your first and last name. ?"
        }
    if (message.includes('Jonathan Martin')) {
           speech.text = "What is your date of birth, starting with day, month and year so I can pull up your record";
       }

    if (message.includes('20th October 1956')) {
           speech.text = "You are a member , your doctors name is Jane Amber , I will inform her of your situation,Thank you and get yourself to the nearest emergency hospital, if you need assistance to get to the hospital say I need assistance or say thank you to end this conversation ";

       }

    if (message.includes('I need assistance')){
               speech.text = "I have dispatched a paramedic unit to your address, can you give then access to your house or are you incapacitated ? If so then say I am incapacitated or say I can open my front door.";

        }

    if (message.includes('I am incapacitated')){
               speech.text = "The paramedics are on their way, your front door or window may be broken or damaged to save your life, stay calm and stay on the line I will inform you when they arrive.";
        }

    if (message.includes('I can open my front door')){
               speech.text = "The paramedics are on their way, stay calm, I will call you back when they arrive.";
        }

    if (message.includes('no')){
               speech.text = " That's good, will you like me to do something else for you today ? If you want me to book an appointment with your doctor say your first and last name, or say thank you to end this conversation ?";
        }

    if (message.includes('Philip Johnson')){
               speech.text = " What is your date of birth ? Please say Day, Month and Year so I can pull up your records";
        }
    
    if (message.includes('18th September 1978')){
               speech.text = " You are a member, your doctor's name is Jane Amber, she will be able to see you on the 20th of February 2021 at 15:00. If you accept, say I accept, if you decline say I decline";
        }
        

    if (message.includes('I accept')){
               speech.text = " Your appointment has been booked, I will call you a day before your appointment to remind you.";
        }

     if (message.includes('I decline')){
               speech.text = "I will check for another date and get back to you at 647-987-0896, Please say thank you to end this conversation";
        }
    
    if (message.includes('thank you')){
               speech.text = "Thank you have a nice day and keep safe, always wear a mask and wash your hands, your well beign is important to us!"
        }

    if (message.includes('6479')){
               speech.text = "Thank you, your name is Samantha Jones, your doctor is Peter Dominic, what is the reason for your visit, please say follow up, or say urgent, or say new appointment !"
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


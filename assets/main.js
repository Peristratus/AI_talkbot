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
   if (message.includes('how are you') || message.includes('hi') || message.includes('hello') ) {
       speech.text = "I am fine, thanks. How are you ?";
     }  

    if (message.includes('fine') || message.includes('ok') || message.includes('good')) {
       speech.text = "Nice to hear that, how can i assist you today ?";
    }

    if (message.includes('sick') || message.includes('bad')) {
       speech.text = "what is wrong with you and how can I help you ?";
   }

   if (message.includes('temperature') || message.includes('High temprature')) {
       speech.text = "what is your temperature ? If it is between 39 to  50 Celsius then say 39 to 50 Celsius";
    }

    if (message.includes(' high blood pressure') || message.includes(' blood pressure is high')) {
       speech.text = "what is your blood pressure ? If it is greater than 160/100 say greater , or say the same value ";
    }

    if (message.includes('appointment')) {
       speech.text = "what is the last four digits of your membership card ?";
    }

    if (message.includes('continue')) {
       speech.text = "How can I help you today ?";
    }

    if (message.includes('not feel well') || message.includes('not feel good') || message.includes('not feeling too good') || message.includes('not feeling too well') || message.includes('not well') ||  message.includes('not feeling well')) {
       speech.text = "What is wrong with you and how can I help you today ?";
    }


   //end Key Words 

    if (message.includes('39 to 50 Celsius')) {
           speech.text = "That is a high temperature, do you have flu like symptoms, if you do then say positive or say negative ?";
       }

    if (message.includes('positive')){
               speech.text = "You may have COVID 19, please go to your nearest emergency hospital, What is your first and last name. ?"
        }

    if (message.includes('negative')){
               speech.text = " That's good, will you like me to do something else for you today ? If you want me to book an appointment with your doctor say your first and last name, or say thank you to end this conversation ?";
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

    if (message.includes('Philip Johnson')){
               speech.text = " What is your date of birth ? Please say Day, Month and Year so I can pull up your records";
        }
    
    if (message.includes('18th September 1978')){
               speech.text = " You are a member, your doctor's name is Jane Amber, she will be able to see you on the 20th of February 2021 at 15:00. If you accept, say I accept, if you decline say I decline";
        }
        

    if (message.includes('I accept')){
               speech.text = " Your appointment has been booked, I will call you a day before your appointment to remind you, Please say thank you, to end this conversation or say continue to restart the conversation. ";
        }

     if (message.includes('I decline')){
               speech.text = "I will check for another date and get back to you via-email and a telephone call, Please say thank you, to end this conversation or say continue to restart the conversation.";
        }
    
    if (message.includes('thank you' )){
               speech.text = "Thank you have a nice day and keep safe, always wear a mask and wash your hands, your well beign is important to us!"
        }

    if (message.includes('6479')){
               speech.text = "Thank you, your name is Samantha Jones, your doctor is Peter Dominic, what is the reason for your visit, please say follow up, or say urgent, or say new !"
        }

    if (message.includes('urgent')) {
                   speech.text = "Your doctor will give you a call at 16:45 hours today. Say thank you to end this conversation or say continue to restart the conversation ?  "
        }
    if (message.includes('follow up')) {
                   speech.text = "Your doctor will be able to see you on the 14th of March 2021, If you accept, say I accept, if you decline say I decline ?  "
        }

    if (message.includes('new')) {
                   speech.text = "Your doctor will be able to see you on the 19th of April 2021, If you accept, say I accept, if you decline say I decline ?  "
        }
    if (message.includes('greater') || message.includes('same value') || message.includes('heart attack') ) {
                   speech.text = "Do you have chest pains, shortness of breath, extreme fatigue ? If you have any of the symptoms say chest pains, shortness of breath or extreme fatigue, if none then say none ?  "
        }
     if (message.includes('chest pains ') || message.includes('shortness of breath') || message.includes('extreme fatigue')) {
                   speech.text = "You may be having a heart attack, do you need assistance to get to the hospital say I need assistance or say I do not need assistance, if I do not hear a response I will dispatch the paramedics to your house, they may have to break into your house to save your life ?"
        }

    if (message.includes('none')) {
                   speech.text = " If you have sympthons that are non life threatening, I advise you to book an appointment to see your doctor, if you want to book an appointment, say appointment, or say thank you to end this conversation, or say continue to restart a new conversation ?"
        }

     if (message.includes('I do not need assistance')) {
                   speech.text = "Get yourself to the nearest emergency hospital , I will inform your doctor of your situation. ?  "
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


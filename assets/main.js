const voice = document.querySelector(".voice");
const voice2text = docdocument.querySelector(".voice2text");

const speeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();
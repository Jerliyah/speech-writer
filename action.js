/* ====== DOM Grab ====== */
const ctn = document.querySelector('main');


/* ====== Variables ====== */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
// window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.start()

// console.log(recognition)




/* ====== Functions ====== */



/* ====== Events ====== */

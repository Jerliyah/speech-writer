/* ====== DOM Grab ====== */
const ctn = document.querySelector('main');


/* ====== Variables ====== */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
// window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start()

recognition.addEventListener('results', (e) => { console.log(e) })




/* ====== Functions ====== */

p = document.createElement('p');
ctn.appendChild(p)



/* ====== Events ====== */

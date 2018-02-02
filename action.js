/* ====== DOM Grab ====== */
const ctn = document.querySelector('main');


/* ====== Variables ====== */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
// window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.interimResults = true;






/* ====== Functions ====== */
// TODO:
// API additions or local effects based on voice commands
// Get this to run on firefox as well?

function get_speech(e) {
    let words = Array.from( e.results )
                .map( result => result[0])
                .map( result => result.transcript )
                .join('')
    
    if( e.results[0].isFinal ) {
        show_speech(words)
    }
    
}

function show_speech(text) {

    let p = document.createElement('p');
    p.innerText = text;
    ctn.appendChild(p)

}



/* ====== Events ====== */
recognition.start()
recognition.addEventListener('result', get_speech)
recognition.addEventListener('end', recognition.start)


/*
 * @file speech-to-text.js
 * @authors Trent Repass, Nathan Klimt
 * @date 01/04/2024
 */
"use strict";

//Import SpeechRecognition Library
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


var nextIndex = null;
// var guessesLeft = 3;
// var score = 0;
// var errorCount = 0;
// var timerId = null;
// var clockTime = 0;
// var activityStartTime;
// var activityStopTime;
// var reviewStartTime;
// var reviewStopTime;
// var passStartTime;
// var perfect = true;


startReviewButton.addEventListener("click", startReview);
startActivityButton.addEventListener("click", startActivity);
quitActivityButton.addEventListener("click", quitActivity);

var spokenOutput = document.querySelector(".spokenOutput");

var spokenVerse = [];
var spokenWords = [];
var spokenVerseWords = [];

var compareVerseLength = 0;
var spokenVerseWordsLength = 0;

var verseObj = {
    ref:"John 3:16",
	text:"For God so loved the world that he gave his one and only Son,\
          that whoever believes in him shall not perish but have eternal life.",
    words: []
};

function createWords(text) {
    var words = [];
    words = text.split(/\s*\b\s*/);
    return words;
}

function createGrammar(words) {
    return `#JSGF V1.0; grammar words; public <word> = ${words.join(" | ",)};`;
}

function startReview(event) {
    verseObj.words = createWords(verseObj.text);

	refSpan.innerHTML = verseObj.ref;
	textSpan.innerHTML = verseObj.text;
    reviewDiv.classList.remove("hidden");

    //BUTTON LOGIC
	startReviewButton.setAttribute("disabled", true);
	startActivityButton.removeAttribute("disabled");
    quitActivityButton.removeAttribute("disabled");
    console.log("Initial words array: " + verseObj.words);
    //BUTTON LOGIC
}

function startActivity() {
    //BUTTON LOGIC
    reviewDiv.classList.add("hidden");
	activityDiv.classList.remove("hidden");
	startActivityButton.setAttribute("disabled", true);
    quitActivityButton.removeAttribute("disabled");
    //BUTTON LOGIC

    //Create list of spoken words we want to listen for
    const grammar = createGrammar(verseObj.words);
    console.log("grammar array: " + grammar);

    //Creates an instance of "recognition" to use in the app
    const recognition = new SpeechRecognition();

    //Add list of words to listen for into the recognition list
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);

    //Make recognition aware of list of words
    recognition.grammars = speechRecognitionList;

    //Set recognition properties
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 2;

    wordDiv.innerHTML = "";

    var compareVerse = [];

    for (var i=0; i<verseObj.words.length; i++) {
		var outerSpan = document.createElement("span");
		var span = document.createElement("span");
        span.innerHTML = verseObj.words[i];
		span.id = "span"+i;
		outerSpan.appendChild(span);
		wordDiv.appendChild(outerSpan);
        span.classList.add("verseItemSpan");

        if (verseObj.words[i] === ',' || verseObj.words[i] === '.' || verseObj.words[i] === ';' || 
            verseObj.words[i] === ':' || verseObj.words[i] === '?' || verseObj.words[i] === '!' || verseObj.words[i] === '-') {
            span.classList.add("punct");
        } else {
            span.classList.add("notGuessed");
            compareVerse.push(verseObj.words[i].toLowerCase());
        }
    }

    // //Find first word to guess
    // nextIndex = getNextGuessableWordIndex(-1, verseObj);
    
    // //Blue box around each subsequently guessed word
	// var nextSpan = document.getElementById("span"+nextIndex);
	// if(nextSpan) {
	// 	//console.log("Next word to be guessed:", nextSpan.innerHTML);
	// 	nextSpan.parentElement.classList.add("selectedWord");
	// } else {
	// 	console.log("startActivity(): nextSpan invalid");
    // }
    
    //SPEECH STUFF
    recognition.start();

    recognition.onresult = (event) => {
        //Raw data from speech
        spokenVerse = event.results[0][0].transcript;

        //Convert said data into an array
        spokenWords = spokenVerse.split(/\s*\b\s*/);

        //Convert words into lower case for comparison
        for (var i=0; i<spokenWords.length; i++) {
            spokenVerseWords.push(spokenWords[i].toLowerCase());
        }

        //Writes spoken result to the screen
        spokenOutput.innerHTML = "Your response was: " + spokenWords.join(" ") + ".";

        spokenVerseWordsLength = spokenVerseWords.length;
        compareVerseLength = compareVerse.length; 

        //Spoken response is too short
        if (compareVerseLength > spokenVerseWordsLength) {
            for (var i = 0; i < (compareVerseLength - spokenVerseWordsLength); i++) {
                spokenVerseWords.push("*");
            } 
        }
        //Spoken response is too long
        if (compareVerseLength < spokenVerseWordsLength) {
            for (var i = 0; i < (spokenVerseWordsLength - compareVerseLength); i++) {
                compareVerse.push("*");
            } 
        }

        console.log("Compare verse array: " + compareVerse);
        console.log("Spoken words array: " + spokenVerseWords);

        var currentSpanNumber = 0;
        var currentSpan;
        
        for(var x = 0; x <= compareVerse.length; x++) {
            currentSpanNumber = x;
            if (compareVerse[x] === spokenVerseWords[x]) {
                currentSpan = document.getElementById("span" + currentSpanNumber);
                currentSpan.classList.add("correctlyGuessed");
            } else {
                currentSpan = document.getElementById("span" + currentSpanNumber);
                currentSpan.classList.add("incorrectlyGuessed");
            } 
        }
    };
}

function getNextGuessableWordIndex(nextIndex, verseObj) {
	if(nextIndex===null || nextIndex==-1) {
		// Apparently just starting up
		nextIndex = 0;
	} else {
		// Move past the previous word
		nextIndex++;
	}

	while(nextIndex<verseObj.words.length && verseObj.words[nextIndex].isHidden==false) {
		// Finding next word to guess
		nextIndex++;
	}

	if(nextIndex>=verseObj.words.length) {
		// Ran off end of words
		nextIndex = -1;
	}
	return nextIndex;
}


function quitActivity() {
    //BUTTON LOGIC
    startActivityButton.setAttribute("disabled", true);
	startActivityButton.setAttribute("value", "Memorize");
	startReviewButton.removeAttribute("disabled");
	quitActivityButton.setAttribute("disabled", true);
	reviewDiv.classList.add("hidden");
    activityDiv.classList.add("hidden");
    //BUTTON LOGIC

    spokenOutput.innerHTML = "";
}

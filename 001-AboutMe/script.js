/* -------------- HANDWRITE EFFECT -------------- */
const handwrite = document.querySelector(".handwrite");

let messages = ["I'm a Software Engineer.", "I code my thoughts.", "I make my dreams come true."]
let charArrays = []; 
let messageIndex = 0;

// transform every strings in the 'messages' array into char array
messages.forEach(message =>{
    let charArray = Array.from(message);
    charArrays[messageIndex] = charArray;
    messageIndex++;
})

// reset messageIndex as 0. It will be used later
messageIndex = 0;

let charIndex = 0;
// function to handwrite message
const intervalFunction = () =>{
    handwrite.innerHTML += charArrays[messageIndex][charIndex];

    charIndex++;

    // if charIndex exceeds the limits of the message -which means the message is written, stop the interval
    if(charIndex === charArrays[messageIndex].length){
        clearInterval(letterInterval);
        charIndex = 0;
    }
};

// write the first message at 100 millisecond intervals
let letterInterval = setInterval(() =>{intervalFunction()}, 100);

// interval to handwrite all the messages in every 7 seconds
const messageInterval = setInterval(() =>{
    handwrite.innerHTML = "";

    if(messageIndex === charArrays.length - 1){
        messageIndex = 0;
    }
    else{
        messageIndex++;
    }
    
    // start the interval again
    letterInterval = setInterval(() =>{intervalFunction()}, 100);
}, 7000)
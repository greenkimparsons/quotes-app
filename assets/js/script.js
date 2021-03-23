//DOM VARIABLES
var quoteContainer = document.getElementById("current-quote");
var nextQuoteButton = document.getElementById("next-quote");

//JAVASCRIPT VARIABLES
// var arrayOfQuotes = [
//     "Today is the first day of the rest of your life." ,
//     "Do or do not. There is no try.",
//     "Whether you think you can, or you think you can't, you're right",
// ];
var arrayOfQuotes = [
    {
        text: "Today is the first day of the rest of your life.",
        author: "Kenny Chesney",
        tags: ["Today", "Life", "Start now"],
    },
    {
        text: "Do or do not. There is no try.",
        author: "Yoda",
        tags: ["Success", "Focus", "Energy"],
    },
    {
        text: "Whether you think you can, or you think you can't, you're right.",
        author: "Henry Ford",
        tags: ["Thoughts", "Power of Positive Thinking"],
    },
];
var currentIndex =  0;

//FUNCTION DEFINITIONS

function displayQuote (){
    quoteContainer.innerHTML = ""; //clear the quotes before displaying next quote
    // PULL THE QUOTE TEXT OFF THE OBJECT
    //1. Create an element
    var quoteEl = document.createElement("h1");
    //2. Add content
    quoteEl.textContent = arrayOfQuotes[currentIndex].text; //gives us text at that index
    //3. Append to an existing element
    quoteContainer.append(quoteEl);

    // PULL THE QUOTE AUTHOR OFF THE OBJECT
    var authorEl = document.createElement("h3");
    authorEl.textContent = arrayOfQuotes[currentIndex].author; //gives us author at that index
    quoteContainer.append(authorEl);

    // PULL THE TAGS ARRAY OFF THE OBJECT, ITERATE OVER THEM
    for (var i = 0; i < arrayOfQuotes[currentIndex].tags.length; i++) {
        var tagEl = document.createElement("p");
        tagEl.textContent = arrayOfQuotes[currentIndex].tags[i];
        quoteContainer.append(tagEl);
    }
}

//EVENT LISTENERS/
nextQuoteButton.addEventListener("click", function(){
    console.log("You clicked the next button");
    if(currentIndex < arrayOfQuotes.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0; //if reaches end, start quote from the beginning
    }

    displayQuote();
})

//FUNCTION CALLS
displayQuote();
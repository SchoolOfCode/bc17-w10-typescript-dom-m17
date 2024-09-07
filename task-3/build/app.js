"use strict";
function getNewJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json" // Explicitly request a JSON response
        }
    })
        .then((response) => {
        return response.json();
    })
        .then(data => {
        const quoteDisplay = document.getElementById("quote-display");
        if (quoteDisplay) {
            quoteDisplay.innerHTML = data.joke;
        }
        else {
            console.error('Element with id "quote-display" not found.');
        }
    })
        .catch(error => {
        console.error('Error:', error);
    });
}
const button = document.getElementById("get-quote");
if (button) {
    button.addEventListener('click', getNewJoke);
}

// script.js

const messages = [
    "Initialling Hacking",
    "Reading Your Files",
    "Password files Deleted",
    "Sending all the passwords and personal files to server",
    "Cleaning up"
];

const messageArea = document.getElementById("messageArea");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessages() {
    for (let message of messages) {
        const span = document.createElement('span');
        span.textContent = message;
        span.classList.add('blinking-dots');
        messageArea.appendChild(span);
        
        await sleep(Math.random() * 6000 + 1000); // Random delay between 1 to 7 seconds

        span.classList.remove('blinking-dots');
        span.textContent += "...";
        messageArea.appendChild(document.createElement('br'));
    }
}

displayMessages();

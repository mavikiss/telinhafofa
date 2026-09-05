const progress = document.getElementById("progress");

const percentage = document.getElementById("percentage");

const terminalText = document.getElementById("terminalText");

let value = 0;


let messageIndex = 0;

const terminalMessages = [
    "> booting mavikiss.exe",
    "> loading creativity...",
    "> compiling projects...",
    "> checking imagination...",
    "> organizing ideas...",
    "> status: ONLINE"
];

function load() {
    value++;

    if (value > 100) {
        value = 0;
        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }
    }

    progress.style.width = `${value}%`;

    percentage.textContent = `${value}%`;

    if (value % 17 === 0) {
    const terminalIndex = Math.floor(
        value / 17
    );

    if (terminalIndex < terminalMessages.length) {
        terminalText.textContent =
            terminalMessages[terminalIndex];
    }
}
  
}

setInterval(load, 100);



const messageElement = document.querySelector(".message");

let currentText = "";
let charIndex = 0;
let typingForward = true;

function typeMessage() {
    const text = messages[messageIndex];

    if (typingForward) {
        currentText = text.slice(0, charIndex);
        charIndex++;

        if (charIndex > text.length) {
            typingForward = false;

            setTimeout(() => {
                typeMessage();
            }, 900);

            return;
        }
    } else {
        currentText = text.slice(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            typingForward = true;

            messageIndex++;

            if (messageIndex >= terminalMessages.length) {
                messageIndex = 0;
            }
        }
    }

    messageElement.textContent = currentText;
}

setInterval(typeMessage, 80);


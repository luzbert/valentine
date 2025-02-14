const messages = [
    "mag yes kana",
    "Sure kana diyan??",
    "Baka puwede pa mag bago isip mo?",
    "Bossingggg...",
    "Ayaw mo talaga???",
    "Mag yes ka na please",
    "Kulit talaga oh mag yes kana",
    "Look bossing im sad na",
    "Edi don't",
    "ikaw nmn hindi mabiro mag yes kana!!!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}
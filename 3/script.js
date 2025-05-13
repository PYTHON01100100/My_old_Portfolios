document.addEventListener("DOMContentLoaded", () => {
    const words = [
        " Developer",
        " Web Developer",
        " Cloud Computing Intern",
        " Machine Learning Intern",
        " Data Science Intern"
    ];
    const typingTextSpan = document.querySelector(".typing-text span");
    let wordIndex = 0;

    function updateText() {
        typingTextSpan.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length; // Loop through the words
    }

    updateText(); // Set the initial text
    setInterval(updateText, 2000); // Change text every 2 seconds
});
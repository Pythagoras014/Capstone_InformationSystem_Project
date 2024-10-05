document.getElementById("send-button").addEventListener("click", function() {
    const input = document.getElementById("message-input");
    const messageText = input.value.trim();

    if (messageText !== "") {
        displayMessage(messageText, "user");
        input.value = ""; // Clear the input

        // Simulate a bot response after a short delay
        setTimeout(() => {
            displayMessage("Hello, this is LGU speaking,", "bot");
        }, 1000);

        // Simulate a bot response after a 1 second delay
        setTimeout(() => {
            displayMessage("Provide an incident report for assistance", "bot");
        }, 1000);

    }
});

function displayMessage(text, sender) {
    const messagesContainer = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);

    // Scroll to the bottom of the chat window
    const chatWindow = document.getElementById("chat-window");
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
